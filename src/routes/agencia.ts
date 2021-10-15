import { Request, Response, Application } from "express";
import {  AgenciaController } from '../controllers/agencia.controllers'



export class AgenciaRoutes {

    public agenciacontroller: AgenciaController = new AgenciaController();

    public routes(app: Application): void {
        app.route('/agencias').get(this.agenciacontroller.getAgencias);
        app.route('/agencias').get(this.agenciacontroller.createAgencia);
        app.route('/agencias').get(this.agenciacontroller.borraragencia);

    }

}