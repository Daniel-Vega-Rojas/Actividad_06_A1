import { Request, Response, Application } from "express";
import {  PersonaController } from '../controllers/persona.controllers'


export class PersonaRoutes {

    public personacontroller: PersonaController = new PersonaController();

    public routes(app: Application): void {
        app.route('/personas').get(this.personacontroller.index);

    }

}