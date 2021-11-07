import { Request, Response } from "express";
import { where } from "sequelize";
import { Categoria, CategoriaI } from '../models/categoria';

export class CategoriaController {

    // public index(req: Request, res: Response) {
    //     User.findAll({})
    //         .then((users: Array<User>) => res.json(users))
    //         .catch((err: Error) => res.status(500).json(err));



    // }
    public  async getCategorias (req: Request, res: Response){

      try {
          const categorias = await Categoria.findAll()
          if(!categorias) {
              res.status(400).json({msg: 'Persona  invalid'})
         }
         return res.status(200).json({categorias})

      } catch (error) {

          res.status(500).json({msg: 'Error Internal'})

      }
  }

    
    public async createCategorias(req: Request, res: Response){

        // const body: CategoriaI = req.body;

        const {
          id,
          iva,
          descripcion,
          status

        } = req.body
        
        try {
          let body: CategoriaI= {
              iva, 
              descripcion,
              status

            }   
          const categoriaExist: Categoria | null = await Categoria.findOne (
            {
                  where: {descripcion: body.descripcion},
            }


        );  

        if (categoriaExist){
          return res.status(400).json({msg: 'la categoria ya ha sido registrado'})
        }

        const categoria = await Categoria.create(body);
        res.status(200).json({categoria})

      }catch (error) {

          res.status(500).json({msg: 'Error Internal'})

      }

      

    }

    public async updateCategoria(req: Request, res: Response) {

      const { id: pk } = req.params;
      const {
        id,
        iva,
        descripcion,
        status

      } = req.body

      try {
        let body: CategoriaI= {
          iva,
          descripcion,
          status

        }   

        const categoriaExist:CategoriaI | null = await Categoria.findByPk(pk)

        if(!categoriaExist) return res.status(500).json({msg: 'la categoria no existe'})

        await Categoria.update(
          body,
          {
            where: {id:pk}
          }
        )

        const categoria: CategoriaI | null = await Categoria.findByPk(pk)
        res.status(200).json({categoria})

      }catch (error){

        res.status(500).json({msg: 'Error Internal'})


      }
      

      

    }

    public async deleteCategoria(req: Request, res: Response){

      const {id: pk} = req.params;

      try {
        const categoriaExist:CategoriaI | null = await Categoria.findByPk(pk)

        if(!categoriaExist) return res.status(500).json({msg: 'la categoria no existe'})

       await Categoria.update(
          {
            status: "Desactivado",

          },

          {
            where: { id:pk}
          }
          
        );
        
        res.status(200).json({msg: 'la categoria fue eliminado'})
      } catch (error) {
        
      }

    }

    public async destroyCategoria(req: Request, res: Response){

      const {id: pk} = req.params;

      try {
        const categoriaExist:CategoriaI | null = await Categoria.findByPk(pk)

        if(!categoriaExist) return res.status(500).json({msg: 'la categoria no existe'})

       await Categoria.destroy(
          // {
          //   status: "Desactivado",

          // },

          {
            where: { id:pk}
          }
          
        );
        
        res.status(200).json({msg: 'la categoria fue destruido'})
      } catch (error) {
        
      }

    }



    
}
