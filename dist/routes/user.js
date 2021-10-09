"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controllers_1 = require("../controllers/user.controllers");
class UserRoutes {
    constructor() {
        this.usercontroller = new user_controllers_1.UserController();
    }
    routes(app) {
        app.route('/users').get(this.usercontroller.index);
    }
}
exports.UserRoutes = UserRoutes;
