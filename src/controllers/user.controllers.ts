import { Request, Response } from "express";
import { User, UserI } from '../models/user';

export class UserController {

    // public index(req: Request, res: Response) {
    //     User.findAll({})
    //         .then((users: Array<User>) => res.json(users))
    //         .catch((err: Error) => res.status(500).json(err));



    // }

    public  async getUsers (req: Request, res: Response){

        try {
            const users = await User.findAll()
            if(!users) {
                res.status(400).json({msg: 'User invalid'})
           }
           return res.status(200).json({users})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }

    public async createUser(req: Request, res: Response){

        const body: UserI = req.body;

        try {
          if ((!body.nombre && body.apellido && body.correo && body.contraseña)) return res.status(400).json({msg: 'same ya kkk'});

          const userExist: User | null = await User.findOne (
              {
                    where: {correo: body.correo},
              }


          );  




        if (userExist){
            return res.status(400).json({msg: 'correo ya existe'})
        }

        const user = await User.create(body);
        res.status(200).json({user})

        }catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }

    }



    
}
