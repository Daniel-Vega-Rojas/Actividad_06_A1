import { Request, Response } from "express";
import { Hotel, HotelI } from '../models/hotel';

export class HotelController {

    // public index(req: Request, res: Response) {
    //     Hotel.findAll({})
    //         .then((hoteles: Array<Hotel>) => res.json(hoteles))
    //         .catch((err: Error) => res.status(500).json(err));



    // }

    public  async getHotel (req: Request, res: Response){

        try {
            const hoteles = await Hotel.findAll()
            if(!hoteles) {
                res.status(400).json({msg: 'Hotel no existe '})
           }
           return res.status(200).json({hoteles})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal '})

        }
    }

    public async createHotel(req: Request, res: Response){

        const body: HotelI = req.body;

        try {
          if ((!body.Nombre_De_Hotel && body.Direccion && body.Año_De_Construccion)) return res.status(400).json({msg: '?? existe '});

          const hotelExist: Hotel | null = await Hotel.findOne (
              {
                    where: {Nombre_De_Hotel: body.Nombre_De_Hotel},
              }


          );  

        


        if (hotelExist){
            return res.status(400).json({msg: 'el hotel ya ha sido registrada'})
        }

        const hotel = await Hotel.create(body);
        res.status(200).json({hotel})

        }catch (error) {

            res.status(500).json({msg: 'Error Internal'})


        }

    }

    public async borrarHotel(req: Request,res: Response){

    
    try {

        const { id } = req.body;
    
        const response = await Hotel.destroy({
          where: { id: id }
        })
        .then( function(data){
          const res = { success: true, data: data, message: "Eliminar hotel  successful" }
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