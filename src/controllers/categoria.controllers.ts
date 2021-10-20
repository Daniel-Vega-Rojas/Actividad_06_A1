import { Request, Response } from "express";
import { Categoria, CategoriaI } from '../models/categoria';

export class CategoriaController {

    // public index(req: Request, res: Response) {
    //     categoria.findAll({})
    //         .then((categoria: Array<Hotel>) => res.json(hoteles))
    //         .catch((err: Error) => res.status(500).json(err));



    // }

    public  async getCategoria (req: Request, res: Response){

        try {
            const categoria = await Categoria.findAll()
            if(!categoria) {
                res.status(400).json({msg: 'categoria no existe '})
           }
           return res.status(200).json({categoria})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal '})

        }
    }

    public async createCategoria(req: Request, res: Response){

        const body: CategoriaI = req.body;

        try {
          if ((!body.iva && body.descripcion )) return res.status(400).json({msg: '?? existe '});

          const categoriaExist: Categoria | null = await Categoria.findOne (
              {
                    where: {descripcion: body.descripcion},
              }


          );  

        


        if (categoriaExist){
            return res.status(400).json({msg: 'el categoria ya ha sido registrada'})
        }

        const categoria = await Categoria.create(body);
        res.status(200).json({categoria})

        }catch (error) {

            res.status(500).json({msg: 'Error Internal'})


        }

    }

    public async borrarCategoria(req: Request,res: Response){

    
    try {

        const { id } = req.body;
    
        const response = await Categoria.destroy({
          where: { id: id }
        })
        .then( function(data){
          const res = { success: true, data: data, message: "Eliminar categoria  successful" }
          return res;
        })
        .catch(error => {
          const res = { success: false, error: error }
          return res;
        })
        res.json(response);
    
      } catch (e) {
        console.log(e);
      }
    }
}