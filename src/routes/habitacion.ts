import { Request, Response, Application } from "express";
import {  HabitacionController } from '../controllers/habitacion.controllers'

export class HabitacionRoutes {

    public habitacioncontroller: HabitacionController = new HabitacionController();

    public routes(app: Application): void {
        app.route('/habitaciones').get(this.habitacioncontroller.getHabitaciones);
        app.route('/habitaciones').post(this.habitacioncontroller.createHabitacion);
        app.route('/habitaciones').delete(this.habitacioncontroller.borrarHabitacion);
    }

}