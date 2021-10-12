import { Request, Response } from "express";
import { Reserva } from '../models/reserva';

export class ReservaController {

    public index(req: Request, res: Response) {
        Reserva.findAll({})
            .then((reservas: Array<Reserva>) => res.json(reservas))
            .catch((err: Error) => res.status(500).json(err));



    }
}