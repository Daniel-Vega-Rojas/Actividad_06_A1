import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
// poner por si nos irve la de arriba nigga*
import { ReservaI } from 'src/app/models/ReservaI';

import { ReservaService } from 'src/app/services/reserva.service';



@Component({
  selector: 'app-show-reserva',
  templateUrl: './show-reserva.component.html',
  styleUrls: ['./show-reserva.component.css']
})
export class ShowReservaComponent implements OnInit {

  public reserva: ReservaI [] = []
  public displayedColumns: string [] = ["id","Fecha_Ingreso","Hora_Ingreso","Fecha_Salida"]

  constructor(

    private reservaService: ReservaService,
    private rooter: Router
  ) { }

  ngOnInit(): void {
    this.mostrarReserva();
  }

  mostrarReserva(){
    this.reservaService.getReserva()
    .subscribe({
      next:(data)=> {
      this.reserva = data
      console.log(data)

      }
      
    }) 

  }

}
