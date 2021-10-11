import { Request, Response } from "express";
import { Categoria } from '../models/categoria';


export class CategoriaController {

    public index(req: Request, res: Response) {
        Categoria.findAll({})
            .then((categorias: Array<Categoria>) => res.json(categorias))
            .catch((err: Error) => res.status(500).json(err));



    }
}