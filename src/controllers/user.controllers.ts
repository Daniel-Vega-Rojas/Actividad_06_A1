import { Request, Response } from "express";
import { where } from "sequelize";
import { User, UserI } from '../models/user';

export class UserController {

    // public index(req: Request, res: Response) {
    //     User.findAll({})
    //         .then((users: Array<User>) => res.json(users))
    //         .catch((err: Error) => res.status(500).json(err));



    // }

    public  async getUsers (req: Request, res: Response){

        try {
            const users = await User.findAll(
              {
                where: { status: "Activado"}
              }
            )
            if(!users) {
                res.status(400).json({msg: 'User invalid'})
           }
           return res.status(200).json({users})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }

    
    public async createUser(req: Request, res: Response){

        // const body: UserI = req.body;

        const {
          id,
          nombre,
          apellido,
          correo,
          contraseña,
          status

        } = req.body
        
        try {
          let body: UserI= {
              nombre,
              apellido,
              correo,
              contraseña,
              status

            }   
          const userExist: User | null = await User.findOne (
            {
                  where: {correo: body.correo},
            }


        );  

        if (userExist){
          return res.status(400).json({msg: 'El usuario ya ha sido registrado'})
        }

        const user = await User.create(body);
        res.status(200).json({user})

      }catch (error) {

          res.status(500).json({msg: 'Error Internal'})

      }

      

    }

    public async updateUser(req: Request, res: Response) {

      const { id: pk } = req.params;
      const {
        id,
        nombre,
        apellido,
        correo,
        contraseña,
        status

      } = req.body

      try {
        let body: UserI= {
          nombre,
          apellido,
          correo,
          contraseña,
          status

        }   

        const userExist:UserI | null = await User.findByPk(pk)

        if(!userExist) return res.status(500).json({msg: 'El usuario no existe'})

        await User.update(
          body,
          {
            where: {id:pk}
          }
        )

        const user: UserI | null = await User.findByPk(pk)
        res.status(200).json({user})

      }catch (error){

        res.status(500).json({msg: 'Error Internal'})


      }
      

      

    }

    public async deleteUser(req: Request, res: Response){

      const {id: pk} = req.params;

      try {
        const userExist:UserI | null = await User.findByPk(pk)

        if(!userExist) return res.status(500).json({msg: 'El usuario no existe'})

       await User.update(
          {
            status: "Desactivado",

          },

          {
            where: { id:pk}
          }
          
        );
        
        res.status(200).json({msg: 'El usuario fue eliminado'})
      } catch (error) {
        
      }

    }

    public async destroyUser(req: Request, res: Response){

      const {id: pk} = req.params;

      try {
        const userExist:UserI | null = await User.findByPk(pk)

        if(!userExist) return res.status(500).json({msg: 'El usuario no existe'})

       await User.destroy(
          // {
          //   status: "Desactivado",

          // },

          {
            where: { id:pk}
          }
          
        );
        
        res.status(200).json({msg: 'El usuario fue destruido'})
      } catch (error) {
        
      }

    }



    
}
