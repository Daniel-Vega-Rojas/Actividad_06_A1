import { Request, Response, Application } from "express";
import {  ReservaController } from '../controllers/reserva.controllers'

export class ReservaRoutes {

    public reservacontroller: ReservaController = new ReservaController();

    public routes(app: Application): void {
        app.route('/reservas').get(this.reservacontroller.getReservas);
        app.route('/reservas').post(this.reservacontroller.createReservas);
        app.route('/reservas/:id').patch(this.reservacontroller.updateReservas);
        app.route('/desactivarreservas/:id').patch(this.reservacontroller.deleteReservas);
        app.route('/destroyreservas/:id').delete(this.reservacontroller.destroyReserva);
    }

}