import { Request, Response, Application } from "express";
import {  PersonaController } from '../controllers/persona.controllers'


export class PersonaRoutes {

    public personacontroller: PersonaController = new PersonaController();

    public routes(app: Application): void {
        app.route('/personas').get(this.personacontroller.getPersonas);
        app.route('/personas').post(this.personacontroller.createPersonas);
        app.route('/personas/:id').patch(this.personacontroller.updatePersona);
        app.route('/desactivarpersonas/:id').patch(this.personacontroller.deletePersonas);
        app.route('/destroypersonas/:id').delete(this.personacontroller.destroyPersona);
    }

}