import { Request, Response, Application } from "express";
import {  UserController } from '../controllers/user.controllers'


export class UserRoutes {

    public usercontroller: UserController = new UserController();

    public routes(app: Application): void {
        app.route('/users').get(this.usercontroller.index);

    }

}