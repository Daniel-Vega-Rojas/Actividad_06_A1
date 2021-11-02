import { Request, Response, Application } from "express";
import {  UserController } from '../controllers/user.controllers'


export class UserRoutes {

    public usercontroller: UserController = new UserController();

    public routes(app: Application): void {
        // app.route('/users').get(this.usercontroller.index);
         app.route('/users').get(this.usercontroller.getUsers);
         app.route('/users').post(this.usercontroller.createUser);
         app.route('/users/:id').patch(this.usercontroller.updateUser);
         app.route('/desactivarusers/:id').patch(this.usercontroller.deleteUser);
         app.route('/destroyusers/:id').delete(this.usercontroller.destroyUser);

    }

}