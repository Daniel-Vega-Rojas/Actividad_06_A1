import { Request, Response } from "express";
import { Sale } from '../models/sale';

export class SaleController {

    // public index(req: Request, res: Response) {
    //     User.findAll({})
    //         .then((users: Array<User>) => res.json(users))
    //         .catch((err: Error) => res.status(500).json(err));



    // }

    public  async getSales (req: Request, res: Response){

        try {
            const sales = await Sale.findAll()
            if(!sales) {
                res.status(400).json({msg: 'User invalid'})
           }
           return res.status(200).json({sales})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }

    public mostrarVentas(){

    }
}