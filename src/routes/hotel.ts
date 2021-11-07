import { Request, Response, Application } from "express";
import {  HotelController } from '../controllers/hotel.controllers'

export class HotelRoutes {

    public hotelcontroller: HotelController = new HotelController();

    public routes(app: Application): void {
        app.route('/hoteles').get(this.hotelcontroller.getHoteles);
        app.route('/hoteles').post(this.hotelcontroller.createHoteles);
        app.route('/hoteles/:id').patch(this.hotelcontroller.updateHoteles);
        app.route('/desactivarhoteles/:id').patch(this.hotelcontroller.deleteHoteles);
        app.route('/destroyhoteles/:id').delete(this.hotelcontroller.destroyHotel);
    }

}