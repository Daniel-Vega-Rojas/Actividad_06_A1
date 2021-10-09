import { Request, Response } from "express";
import { User } from '../models/user';

export class UserController {

    public index(req: Request, res: Response) {
        User.findAll({})
            .then((users: Array<User>) => res.json(users))
            .catch((err: Error) => res.status(500).json(err));



    }
}