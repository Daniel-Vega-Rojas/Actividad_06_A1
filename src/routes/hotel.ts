import { Request, Response, Application } from "express";
import {  HotelController } from '../controllers/hotel.controllers'

export class HotelRoutes {

    public hotelcontroller: HotelController = new HotelController();

    public routes(app: Application): void {
        app.route('/hoteles').get(this.hotelcontroller.index);

    }

}