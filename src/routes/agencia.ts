import { Request, Response, Application } from "express";
import {  AgenciaController } from '../controllers/agencia.controllers'



export class AgenciaRoutes {

    public agenciacontroller: AgenciaController = new AgenciaController();

    public routes(app: Application): void {
        app.route('/agencias').get(this.agenciacontroller.getAgencias);
        app.route('/agencias').post(this.agenciacontroller.createAgencias);
        app.route('/agencias/:id').patch(this.agenciacontroller.updateAgencia);
        app.route('/desactivaragencias/:id').patch(this.agenciacontroller.deleteAgencias);
        app.route('/destroyagencias/:id').delete(this.agenciacontroller.destroyAgencia);
    }

}