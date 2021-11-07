import { Request, Response, Application } from "express";
import {  SaleController } from '../controllers/sale.controllers'


export class SaleRoutes {

    public salecontroller: SaleController = new SaleController();

    public routes(app: Application): void {
        // app.route('/users').get(this.usercontroller.index);
         app.route('/sales').get(this.salecontroller.getSales);
         app.route('/sales').post(this.salecontroller.createSale);

    }

}