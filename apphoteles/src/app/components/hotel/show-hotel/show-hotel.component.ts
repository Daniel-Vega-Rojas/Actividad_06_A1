import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
// poner por si nos irve la de arriba nigga*
import { HotelI } from 'src/app/models/HotelI';

import { HotelService } from 'src/app/services/hotel.service';



@Component({
  selector: 'app-show-hotel',
  templateUrl: './show-hotel.component.html',
  styleUrls: ['./show-hotel.component.css']
})
export class ShowHotelComponent implements OnInit {

  public hotel: HotelI [] = []
  public displayedColumns: string [] = ["id","Nombre_De_Hotel","Direccion","fecha_De_Construccion"]

  constructor(

    private hotelService: HotelService,
    private rooter: Router
  ) { }

  ngOnInit(): void {
    this.mostrarHotel();
  }

  mostrarHotel(){
    this.hotelService.getHotel()
    .subscribe({
      next:(data)=> {
      this.hotel = data
      console.log(data)

      }
      
    }) 

  }

}

