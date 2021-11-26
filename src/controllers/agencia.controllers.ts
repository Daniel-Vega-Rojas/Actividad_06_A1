import { Request, Response } from "express";
import { where } from "sequelize";
import { Agencia, AgenciaI } from '../models/agencia';



export class AgenciaController {

    public getAgencias(req: Request, res: Response) {
        Agencia.findAll({})
            .then((agencias: Array<Agencia>) => res.json(agencias))
            .catch((err: Error) => res.status(500).json(err));



    }
    // public  async getAgencias (req: Request, res: Response){

    //     try {
    //         const agencias = await Agencia.findAll()
    //         if(!agencias) {
    //             res.status(400).json({msg: 'Persona  invalid'})
    //        }
    //        return res.status(200).json({agencias})

    //     } catch (error) {

    //         res.status(500).json({msg: 'Error Internal'})

    //     }
    // }

    // public async createAgencias(req: Request, res: Response){

    //   // const body: UserI = req.body;

    //   const {
    //     id,
    //     nombre,
    //     direccion,
    //     telefono,
    //     ciudad,
    //     status

    //   } = req.body
      
    //   try {
    //     let body: AgenciaI= {
    //         nombre,
    //         direccion,
    //         telefono,
    //         ciudad,
    //         status

    //       }   
    //     const agenciaExist: Agencia | null = await Agencia.findOne (
    //       {
    //             where: {nombre: body.nombre},
    //       }


    //   );  

  //     if (agenciaExist){
  //       return res.status(400).json({msg: 'La Agencia ya ha sido registrada, Vuelva a intentarlo'})
  //     }

  //     const agencia = await Agencia.create(body);
  //     res.status(200).json({agencia})

  //   }catch (error) {

  //       res.status(500).json({msg: 'Error Internal'})

  //   }
    

  // }

  public async createAgencias(req: Request, res: Response){

    let agencia: AgenciaI = req.body;
    try {

      const dataAgencia: AgenciaI = await Agencia.create(agencia);
      res.json(dataAgencia)
    } catch (error) {
        res.status(500).json(error)
    }
  }

  public async updateAgencia(req: Request, res: Response) {

    const { id: pk } = req.params;
    const {
      id,
      nombre,
      direccion,
      telefono,
      ciudad,
      // status

    } = req.body

    try {
      let body: AgenciaI= {
        nombre,
        direccion,
        telefono,
        ciudad,
        // status

      }   

      const agenciaExist:AgenciaI | null = await Agencia.findByPk(pk)

      if(!agenciaExist) return res.status(500).json({msg: 'La Agencia no existe compa :c'})

      await Agencia.update(
        body,
        {
          where: {id:pk}
        }
      )

      const user: AgenciaI | null = await Agencia.findByPk(pk)
      res.status(200).json({user})

    }catch (error){

      res.status(500).json({msg: 'Error Internal'})


    }
    

  }

  public async deleteAgencias(req: Request, res: Response){

    const {id: pk} = req.params;

    try {
      const agenciaExist:AgenciaI | null = await Agencia.findByPk(pk)

      if(!agenciaExist) return res.status(500).json({msg: 'La Agencia ya no existe, compa'})

     await Agencia.update(
        {
          status: "Desactivado",

        },

        {
          where: { id:pk}
        }
        
      );
      
      res.status(200).json({msg: 'La Agencia fue eliminada con exito, Vuelva Pronto'})
    } catch (error) {
      
    }

  }

  public async destroyAgencia(req: Request, res: Response){

    const {id: pk} = req.params;

    try {
      const agenciaExist:AgenciaI | null = await Agencia.findByPk(pk)

      if(!agenciaExist) return res.status(500).json({msg: 'La Agencia ya  no existe :c'})

     await Agencia.destroy(
        // {
        //   status: "Desactivado",

        // },

        {
          where: { id:pk}
        }
        
      );
      
      res.status(200).json({msg: 'La Agencia fue destruida con exito, Gracias Por Todo'})
    } catch (error) {
      
    }
  }




}
