import { Request, Response } from "express";
import { Reserva,ReservaI } from '../models/reserva';

export class ReservaController {

//    public index(req: Request, res: Response) {
//        Reserva.findAll({})
//            .then((reservas: Array<Reserva>) => res.json(reservas))
//            .catch((err: Error) => res.status(500).json(err));
//  }

    public  async getReserva (req: Request, res: Response){

            try {
                const reservas = await Reserva.findAll()
                if(!reservas) {
                    res.status(400).json({msg: 'Reserva no existe '})
       }
       return res.status(200).json({reservas})

    } catch (error) {

        res.status(500).json({msg: 'Error Internal '})

    }
}

public async createReserva(req: Request, res: Response){

        const body: ReservaI = req.body;

    try {
      if ((!body.Fecha_Ingreso && body.Hora_Ingreso && body.Fecha_Salida)) return res.status(400).json({msg: '?? existe '});

      const reservaExist: Reserva | null = await Reserva.findOne (
          {
                where: {Fecha_Ingreso: body.Fecha_Ingreso},
                
          }


      );  

    


    if (reservaExist){
        return res.status(400).json({msg: 'la reserva ya ha sido registrada'})
    }

    const reserva = await Reserva.create(body);
    res.status(200).json({reserva})

    }catch (error) {

        res.status(500).json({msg: 'Error Internal'})


    }

}

public async borrarReserva(req: Request,res: Response){


try {

    const { id } = req.body;

    const response = await Reserva.destroy({
      where: { id: id }
    })
    .then( function(data){
      const res = { success: true, data: data, message: "Eliminar Reserva  successful" }
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