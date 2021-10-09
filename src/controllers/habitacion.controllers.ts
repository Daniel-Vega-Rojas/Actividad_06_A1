import { Request, Response } from "express";
import { Habitacion } from '../models/habitacion';

export class HabitacionController {

    public index(req: Request, res: Response) {
        Habitacion.findAll({})
            .then((users: Array<Habitacion>) => res.json(users))
            .catch((err: Error) => res.status(500).json(err));



    }
}