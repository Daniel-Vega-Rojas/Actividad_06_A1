import { Request, Response, Application } from "express";
import {  ReservaController } from '../controllers/reserva.controllers'

export class ReservaRoutes {

    public reservacontroller: ReservaController = new ReservaController();

    public routes(app: Application): void {
        app.route('/reservas').get(this.reservacontroller.getReserva);
        app.route('/reservas').get(this.reservacontroller.createReserva);
        app.route('/reservas').get(this.reservacontroller.borrarReserva);

    }

}