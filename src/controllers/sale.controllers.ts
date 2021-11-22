import { Request, Response } from "express";
import { RelationalOperator } from "typescript";
import { Product } from "../models/product";
import { ProductSale, ProductSaleI } from "../models/ProductSale";
import { Sale, SaleI } from '../models/sale';

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

    public async createSale(req: Request, res: Response){

        const {
            id,
            fecha,
            descuento,
            subtotal,
            iva,
            granTotal,
            UserId,
            products
            // ojito puede ser UserId o userId
        }= req.body

        try {
 
            let body: SaleI = {

                fecha,
                descuento,
                subtotal,
                iva,
                granTotal,
                UserId

            }

            const sale: Sale  = await  Sale.create(body)

            const salenew = sale.id;
            let productSaleBody:  ProductSaleI [] = [];
            
 // jugar con product,produtcs, productsale, ProductSale en antes del tamaña length , donde va any va ProductSaleI

            if(sale) {
                for (let index = 0; index < products.length; index++) {
                    const element = products[index];
                    productSaleBody.push(
                        {
                            "ProductId": element.ProductId,
                            "SaleId":    element.SaleId,
                            "cantidad":  element.cantidad,
                            "precio":    element.precio,
                            "total":     element.total
                        }
                    )
                    
                }

                let productsale = await ProductSale.bulkCreate(productSaleBody);

                if(!productsale){

                    await sale.destroy(
                        // {
                        //     where: {
                        //         id: salenew
                        //     }
                        // }
                    ); 


                }

                const salecompleted: Sale | null = await Sale.findOne(
                    {
                        where: {
                            id: salenew
                        },

                        include: [
                            {
                                model: Product
                               
                            }
                        ]
                    }
                );

                res.status(200).json({salecompleted})



            }
            
        } catch (error) {
            
        }

    }
}