import { Request, Response } from "express";
import { Hotel } from '../models/hotel';

export class HotelController {

    public index(req: Request, res: Response) {
        Hotel.findAll({})
            .then((hoteles: Array<Hotel>) => res.json(hoteles))
            .catch((err: Error) => res.status(500).json(err));



    }
}