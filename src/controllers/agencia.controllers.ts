import { Request, Response } from "express";
import { Agencia, AgenciaI } from '../models/agencia';



export class AgenciaController {

    // public index(req: Request, res: Response) {
    //     Agencia.findAll({})
    //         .then((agencias: Array<Agencia>) => res.json(agencias))
    //         .catch((err: Error) => res.status(500).json(err));



    // }
    public  async getAgencias (req: Request, res: Response){

        try {
            const agencias = await Agencia.findAll()
            if(!agencias) {
                res.status(400).json({msg: 'Persona  invalid'})
           }
           return res.status(200).json({agencias})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }

    public async createAgencia(req: Request, res: Response){

        const body: AgenciaI = req.body;

        try {
          if ((!body.nombre && body.direccion && body.telefono && body.ciudad )) return res.status(400).json({msg: 'Agencia R'});

          const agenciaExist: Agencia | null = await Agencia.findOne (
              {
                    where: {nombre: body.nombre},
              }

             
          );  

        


        if (agenciaExist){
            return res.status(400).json({msg: 'La Agencia ya ha sido registrada'})
        }

        const agencia = await Agencia.create(body);
        res.status(200).json({agencia})

        }catch (error) {

            res.status(500).json({msg: 'Error Internal'})


        }

    }

    public async borraragencia(req: Request,res: Response){

    
    try {

        const { id } = req.body;
    
        const response = await Agencia.destroy({
          where: { id: id }
        })
        .then( function(data){
          const res = { success: true, data: data, message: "Eliminar  successful" }
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


