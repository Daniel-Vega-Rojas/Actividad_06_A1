import { Request, Response } from "express";
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

    public async createPersona(req: Request, res: Response){

        const body: PersonaI = req.body;

        try {
          if ((!body.nombre && body.apellido && body.direccion && body.telefono )) return res.status(400).json({msg: 'Persona R'});

          const personaExist: Persona | null = await Persona.findOne (
              {
                    where: {apellido: body.apellido},
              }


          );  

        


        if (personaExist){
            return res.status(400).json({msg: 'La Persona ya ha sido registrada'})
        }

        const persona = await Persona.create(body);
        res.status(200).json({persona})

        }catch (error) {

            res.status(500).json({msg: 'Error Internal'})


        }

    }

    public async borrarpersona(req: Request,res: Response){

    
    try {

        const { id } = req.body;
    
        const response = await Persona.destroy({
          where: { id: id }
        })
        .then( function(data){
          const res = { success: true, data: data, message: "Eliminar  successful" }
          return res;
        })
        .catch(error => {
          const res = { success: false, error: error }
          return res;
        })
        res.json(response);
    
      } catch (e) {
        console.log(e);
      }
    }
    


}
