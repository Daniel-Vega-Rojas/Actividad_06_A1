import { Request, Response } from "express";
import { Agencia } from '../models/agencia';



export class AgenciaController {

    public index(req: Request, res: Response) {
        Agencia.findAll({})
            .then((agencias: Array<Agencia>) => res.json(agencias))
            .catch((err: Error) => res.status(500).json(err));



    }
}