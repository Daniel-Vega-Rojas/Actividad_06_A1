import { Request, Response } from "express";
import { Habitacion, HabitacionI } from '../models/habitacion';

export class HabitacionController {

    // public index(req: Request, res: Response) {
    //     Habitacion.findAll({})
    //         .then((habitaciones: Array<Habitacion>) => res.json(habitaciones))
    //         .catch((err: Error) => res.status(500).json(err));



    // }

    public  async getHabitaciones (req: Request, res: Response){

        try {
            const habitaciones = await Habitacion.findAll()
            if(!habitaciones) {
                res.status(400).json({msg: 'Habitacion  invalid'})
           }
           return res.status(200).json({habitaciones})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }

    public async createHabitacion(req: Request, res: Response){

        // const body: HabitacionI = req.body;

        const {
          id,
          Tipo_De_Habitaciones

        } = req.body
        
        try {
          let body: HabitacionI = {
              Tipo_De_Habitaciones

          }
          const habitacionExist: Habitacion | null = await Habitacion.findOne (
            {
                  where: {Tipo_De_Habitaciones: body.Tipo_De_Habitaciones},
            }


        );  

        if (habitacionExist){
          return res.status(400).json({msg: 'La habitacion ya ha sido registrada'})
        }

        const habitacion = await Habitacion.create(body);
        res.status(200).json({habitacion})

      }catch (error) {

          res.status(500).json({msg: 'Error Internal'})

      }

      

    }
      
    public async borrarHabitacion(req: Request,res: Response){

    
    try {

        const { id } = req.body;
    
        const response = await Habitacion.destroy({
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