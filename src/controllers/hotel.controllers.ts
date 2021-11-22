import { Request, Response } from "express";
import { Hotel, HotelI } from '../models/hotel';

export class HotelController {

    public getHoteles(req: Request, res: Response) {
        Hotel.findAll({})
            .then((hoteles: Array<Hotel>) => res.json(hoteles))
            .catch((err: Error) => res.status(500).json(err));



    }

  //   public  async getHoteles (req: Request, res: Response){

  //     try {
  //         const hoteles = await Hotel.findAll()
  //         if(!hoteles) {
  //             res.status(400).json({msg: 'Persona  invalid'})
  //        }
  //        return res.status(200).json({hoteles})

  //     } catch (error) {

  //         res.status(500).json({msg: 'Error Internal'})

  //     }
  // }

  public async createHoteles(req: Request, res: Response){

    // const body: UserI = req.body;

    const {
      id,
      Nombre_De_Hotel,
      Direccion,
      Año_De_Construccion,
      status

    } = req.body
    
    try {
      let body: HotelI= {
          Nombre_De_Hotel,
          Direccion,
          Año_De_Construccion,
          status
        }   
      const hotelExist: Hotel | null = await Hotel.findOne (
        {
              where: {Nombre_De_Hotel: body.Nombre_De_Hotel},
        }


    );  

    if (hotelExist){
      return res.status(400).json({msg: 'El Hotel ya ha sido registrado, Vuelva a intentarlo'})
    }

    const hotel = await Hotel.create(body);
    res.status(200).json({hotel})

  }catch (error) {

      res.status(500).json({msg: 'Error Internal'})

  }
  

}

public async updateHoteles(req: Request, res: Response) {

  const { id: pk } = req.params;
  const {
    id,
    Nombre_De_Hotel,
    Direccion,
    Año_De_Construccion,
    status

  } = req.body

  try {
    let body: HotelI= {
        Nombre_De_Hotel,
        Direccion,
        Año_De_Construccion,
        status

    }   

    const hotelExist:HotelI | null = await Hotel.findByPk(pk)

    if(!hotelExist) return res.status(500).json({msg: 'El Hotel no existe :c'})

    await Hotel.update(
      body,
      {
        where: {id:pk}
      }
    )

    const user: HotelI | null = await Hotel.findByPk(pk)
    res.status(200).json({user})

  }catch (error){

    res.status(500).json({msg: 'Error Internal'})


  }
  

}

public async deleteHoteles(req: Request, res: Response){

  const {id: pk} = req.params;

  try {
    const hotelExist:HotelI | null = await Hotel.findByPk(pk)

    if(!hotelExist) return res.status(500).json({msg: 'El hotel ya no existe'})

   await Hotel.update(
      {
        status: "Desactivado",

      },

      {
        where: { id:pk}
      }
      
    );
    
    res.status(200).json({msg: 'El Hotel fue eliminado con exito, Vuelva Pronto'})
  } catch (error) {
    
  }

}

public async destroyHotel(req: Request, res: Response){

  const {id: pk} = req.params;

  try {
    const hotelExist:HotelI | null = await Hotel.findByPk(pk)

    if(!hotelExist) return res.status(500).json({msg: 'El Hotel ya  no existe :c'})

   await Hotel.destroy(
      // {
      //   status: "Desactivado",

      // },

      {
        where: { id:pk}
      }
      
    );
    
    res.status(200).json({msg: 'El Hotel fue destruido con exito, Gracias Por Todo'})
  } catch (error) {
    
  }
}




}