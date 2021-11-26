import { Request, Response } from "express";
import { where } from "sequelize";
import { Reserva, ReservaI } from '../models/reserva';

export class ReservaController {

   public getReservas(req: Request, res: Response) {
       Reserva.findAll({})
           .then((reservas: Array<Reserva>) => res.json(reservas))
           .catch((err: Error) => res.status(500).json(err));
 }

// public  async getReservas (req: Request, res: Response){

//   try {
//       const reservas = await Reserva.findAll()
//       if(!reservas) {
//           res.status(400).json({msg: 'Reserva  invalid'})
//      }
//      return res.status(200).json({reservas})

//   } catch (error) {

//       res.status(500).json({msg: 'Error Internal'})

//   }
// }

public async createReservas(req: Request, res: Response){

  let reserva: ReservaI = req.body;
  try {

    const dataReserva: ReservaI = await Reserva.create(reserva);
    res.json(dataReserva)
  } catch (error) {
      res.status(500).json(error)
  }
}

// public async createReservas(req: Request, res: Response){

//     // const body: UserI = req.body;

//     const {
//       id,
//       Fecha_Ingreso,
//       Hora_Ingreso,
//       Fecha_Salida,
//       // status

//     } = req.body

//   try {
//       let body: ReservaI= {
//       Fecha_Ingreso,
//       Hora_Ingreso,
//       Fecha_Salida,
//       // status
//     }   
//   const reservaExist: Reserva | null = await Reserva.findOne (
//     {
//           where: {Fecha_Salida: body.Fecha_Salida},
//     }


// );  

// if (reservaExist){
//   return res.status(400).json({msg: 'El horario ya ha sido registrado, Vuelva a intentarlo'})
// }

// const reserva = await Reserva.create(body);
// res.status(200).json({reserva})

// }catch (error) {

//      res.status(500).json({msg: 'Error Internal'})

// }

// }

public async updateReservas(req: Request, res: Response) {

    const { id: pk } = req.params;
    const {
      id,
      Fecha_Ingreso,
      Hora_Ingreso,
      Fecha_Salida,
      // status

    } = req.body

    try {
      let body: ReservaI= {
      Fecha_Ingreso,
      Hora_Ingreso,
      Fecha_Salida,
      // status

    }   

    const reservaExist:ReservaI | null = await Reserva.findByPk(pk)

    if(!reservaExist) return res.status(500).json({msg: 'La Reserva no existe :c'})

    await Reserva.update(
      body,
      {
        where: {id:pk}
      }
    )

    const user: ReservaI | null = await Reserva.findByPk(pk)
    res.status(200).json({user})

  }catch (error){

      res.status(500).json({msg: 'Error Internal'})


  }


}

public async deleteReservas(req: Request, res: Response){

  const {id: pk} = req.params;

  try {
    const reservaExist:ReservaI | null = await Reserva.findByPk(pk)

    if(!reservaExist) return res.status(500).json({msg: 'El hotel ya no existe'})

    await Reserva.update(
        {
          status: "Desactivado",
        },

        {
          where: { id:pk}
        }
      
      );

      res.status(200).json({msg: 'La Reserva fue eliminada con exito, Vuelva Pronto'})
    } catch (error) {
    }
    
  }

  public async destroyReserva(req: Request, res: Response){

    const {id: pk} = req.params;

    try {
      const reservaExist:ReservaI | null = await Reserva.findByPk(pk)

      if(!reservaExist) return res.status(500).json({msg: 'La Reserva ya  no existe :c'})

    await Reserva.destroy(
  // {
  //   status: "Desactivado",
  // },

        {
          where: { id:pk}
        }
  
      );

      res.status(200).json({msg: 'La Reserva fue destruida con exito, Gracias Por Todo'})
    } catch (error) {

    }
  }

}