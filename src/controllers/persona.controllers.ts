import { Request, Response } from "express";
import { Persona } from '../models/persona';


export class PersonaController {

    public index(req: Request, res: Response) {
        Persona.findAll({})
            .then((personas: Array<Persona>) => res.json(personas))
            .catch((err: Error) => res.status(500).json(err));



    }
}