import { Request, Response } from "express";
import { where } from "sequelize";
import { Persona, PersonaI } from '../models/persona';


export class PersonaController {

    // public index(req: Request, res: Response) {
    //     Persona.findAll({})
    //         .then((personas: Array<Persona>) => res.json(personas))
    //         .catch((err: Error) => res.status(500).json(err));



    // }
    
    public  async getPersonas (req: Request, res: Response){

        try {
            const personas = await Persona.findAll()
            if(!personas) {
                res.status(400).json({msg: 'Persona  invalid'})
           }
           return res.status(200).json({personas})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }

    public async createPersonas(req: Request, res: Response){

      // const body: UserI = req.body;

      const {
        id,
        nombre,
        apellido,
        direccion,
        telefono,
        status

      } = req.body
      
      try {
        let body: PersonaI= {
            nombre,
            apellido,
            direccion,
            telefono,
            status

          }   
        const personaExist: Persona | null = await Persona.findOne (
          {
                where: {nombre: body.nombre},
          }


      );  

      if (personaExist){
        return res.status(400).json({msg: 'La Persona ya ha sido registrada, Gracias'})
      }

      const persona = await Persona.create(body);
      res.status(200).json({persona})

    }catch (error) {

        res.status(500).json({msg: 'Error Internal'})

    }
    

  }

  public async updatePersona(req: Request, res: Response) {

    const { id: pk } = req.params;
    const {
      id,
      nombre,
      apellido,
      direccion,
      telefono,
      status

    } = req.body

    try {
      let body: PersonaI= {
        nombre,
        apellido,
        direccion,
        telefono,
        status

      }   

      const personaExist:PersonaI | null = await Persona.findByPk(pk)

      if(!personaExist) return res.status(500).json({msg: 'La Persona no existe :c'})

      await Persona.update(
        body,
        {
          where: {id:pk}
        }
      )

      const user: PersonaI | null = await Persona.findByPk(pk)
      res.status(200).json({user})

    }catch (error){

      res.status(500).json({msg: 'Error Internal'})


    }
    

  }

  public async deletePersonas(req: Request, res: Response){

    const {id: pk} = req.params;

    try {
      const personaExist:PersonaI | null = await Persona.findByPk(pk)

      if(!personaExist) return res.status(500).json({msg: 'La Persona no existe'})

     await Persona.update(
        {
          status: "Desactivado",

        },

        {
          where: { id:pk}
        }
        
      );
      
      res.status(200).json({msg: 'La Persona fue eliminada con exito :S'})
    } catch (error) {
      
    }

  }

  public async destroyPersona(req: Request, res: Response){

    const {id: pk} = req.params;

    try {
      const personaExist:PersonaI | null = await Persona.findByPk(pk)

      if(!personaExist) return res.status(500).json({msg: 'La ´Persona ya  no existe'})

     await Persona.destroy(
        // {
        //   status: "Desactivado",

        // },

        {
          where: { id:pk}
        }
        
      );
      
      res.status(200).json({msg: 'La Persona fue destruida con exito'})
    } catch (error) {
      
    }
  }




}
