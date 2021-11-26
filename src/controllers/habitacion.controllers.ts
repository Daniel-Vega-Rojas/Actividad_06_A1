import { Request, Response } from "express";
import { Habitacion, HabitacionI } from '../models/habitacion';

export class HabitacionController {

    public getHabitaciones(req: Request, res: Response) {
        Habitacion.findAll({})
            .then((habitaciones: Array<Habitacion>) => res.json(habitaciones))
            .catch((err: Error) => res.status(500).json(err));



    }

    // public  async getHabitaciones (req: Request, res: Response){

    //     try {
    //         const habitaciones = await Habitacion.findAll()
    //         if(!habitaciones) {
    //             res.status(400).json({msg: 'Habitacion  invalid'})
    //        }
    //        return res.status(200).json({habitaciones})

    //     } catch (error) {

    //         res.status(500).json({msg: 'Error Internal'})

    //     }
    // }

  //   public async createHabitaciones(req: Request, res: Response){

  //     // const body: UserI = req.body;

  //     const {
  //       id,
  //       Tipo_De_Habitaciones,
  //       status

  //     } = req.body
      
  //     try {
  //       let body: HabitacionI= {
  //           Tipo_De_Habitaciones,
  //           status

  //         }   
  //       const habitacionExist: Habitacion | null = await Habitacion.findOne (
  //         {
  //               where: {Tipo_De_Habitaciones: body.Tipo_De_Habitaciones},
  //         }


  //     );  

  //     if (habitacionExist){
  //       return res.status(400).json({msg: 'La habitacion ya ha sido registrada'})
  //     }

  //     const habitacion = await Habitacion.create(body);
  //     res.status(200).json({habitacion})

  //   }catch (error) {

  //       res.status(500).json({msg: 'Error Internal'})

  //   }
    

  // }

  public async createHabitaciones(req: Request, res: Response){

    let habitacion: HabitacionI = req.body;
    try {

      const dataHabitacion: HabitacionI = await Habitacion.create(habitacion);
      res.json(dataHabitacion)
    } catch (error) {
        res.status(500).json(error)
    }
  }

  public async updateHabitaciones(req: Request, res: Response) {

    const { id: pk } = req.params;
    const {
      id,
      Tipo_De_Habitaciones,
      // status

    } = req.body

    try {
      let body: HabitacionI= {
        Tipo_De_Habitaciones,
        // status

      }   

      const habitacionExist:HabitacionI | null = await Habitacion.findByPk(pk)

      if(!habitacionExist) return res.status(500).json({msg: 'La habitacion no existe'})

      await Habitacion.update(
        body,
        {
          where: {id:pk}
        }
      )

      const user: HabitacionI | null = await Habitacion.findByPk(pk)
      res.status(200).json({user})

    }catch (error){

      res.status(500).json({msg: 'Error Internal'})


    }
    

  }

  public async deleteHabitaciones(req: Request, res: Response){

    const {id: pk} = req.params;

    try {
      const habitacionExist:HabitacionI | null = await Habitacion.findByPk(pk)

      if(!habitacionExist) return res.status(500).json({msg: 'La Habitacion  no existe'})

     await Habitacion.update(
        {
          status: "Desactivado",

        },

        {
          where: { id:pk}
        }
        
      );
      
      res.status(200).json({msg: 'La Habitacion fue eliminada con exito :S'})
    } catch (error) {
      
    }

  }

  public async destroyHabitaciones(req: Request, res: Response){

    const {id: pk} = req.params;

    try {
      const habitacionExist:HabitacionI | null = await Habitacion.findByPk(pk)

      if(!habitacionExist) return res.status(500).json({msg: 'La habitacion  no existe'})

     await Habitacion.destroy(
        // {
        //   status: "Desactivado",

        // },

        {
          where: { id:pk}
        }
        
      );
      
      res.status(200).json({msg: 'La Habitacion fue destruida con exito'})
    } catch (error) {
      
    }

  }






    


}