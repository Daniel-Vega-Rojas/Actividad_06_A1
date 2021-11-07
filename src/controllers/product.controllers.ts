import { Request, Response } from "express";
import { where } from "sequelize";
import { Product, ProductI } from '../models/product';

export class ProductController {

    // public index(req: Request, res: Response) {
    //     User.findAll({})
    //         .then((users: Array<User>) => res.json(users))
    //         .catch((err: Error) => res.status(500).json(err));



    // }

    public  async getProduct (req: Request, res: Response){

        try {
            const Products = await Product.findAll(
              {
                where: { status: "Activado"}
              }
            )
            if(!Products) {
                res.status(400).json({msg: 'producto invalid'})
           }
           return res.status(200).json({Products})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }

    
    public async createProduct(req: Request, res: Response){

        // const body: UserI = req.body;

        const {
          id,
          nombre,
          marca,
          precio,
          stockMin,
          cantidad,
          // status

        } = req.body
        
        try {
          let body: ProductI= {
              nombre,
              marca,
              precio,
              stockMin,
              cantidad,
              // status

            }   
          const productExist: Product | null = await Product.findOne (
            {
                  where: {nombre: body.nombre},
            }


        );  

        if (productExist){
          return res.status(400).json({msg: 'El producto ya ha sido registrado'})
        }

        const product = await Product.create(body);
        res.status(200).json({Product})

      }catch (error) {

          res.status(500).json({msg: 'Error Internal'})

      }

      

    }

    public async updateProduct(req: Request, res: Response) {

      const { id: pk } = req.params;
      const {
        id,
        nombre,
        marca,
        precio,
        stockMin,
        cantidad
        // status

      } = req.body

      try {
        let body: ProductI= {
          nombre,
          marca,
          precio,
          stockMin,
          cantidad
          // status

        }   

        const productExist:ProductI | null = await Product.findByPk(pk)

        if(!productExist) return res.status(500).json({msg: 'El producto no existe'})

        await Product.update(
          body,
          {
            where: {id:pk}
          }
        )

        const user: ProductI | null = await Product.findByPk(pk)
        res.status(200).json({user})

      }catch (error){

        res.status(500).json({msg: 'Error Internal'})


      }
      

      

    }

    public async deleteProduct(req: Request, res: Response){

      const {id: pk} = req.params;

      try {
        const productExist:ProductI | null = await Product.findByPk(pk)

        if(!productExist) return res.status(500).json({msg: 'El producto no existe'})

       await Product.update(
          {
            status: "Desactivado",

          },

          {
            where: { id:pk}
          }
          
        );
        
        res.status(200).json({msg: 'El producto fue eliminado'})
      } catch (error) {
        
      }

    }

    public async destroyProduct(req: Request, res: Response){

      const {id: pk} = req.params;

      try {
        const productExist:ProductI | null = await Product.findByPk(pk)

        if(!productExist) return res.status(500).json({msg: 'El producto no existe'})

       await Product.destroy(
          // {
          //   status: "Desactivado",

          // },

          {
            where: { id:pk}
          }
          
        );
        
        res.status(200).json({msg: 'El producto fue destruido'})
      } catch (error) {
        
      }

    }



    
}
