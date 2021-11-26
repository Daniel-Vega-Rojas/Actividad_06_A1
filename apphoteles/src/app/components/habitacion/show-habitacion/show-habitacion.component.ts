import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
// poner por si nos irve la de arriba nigga*
import { HabitacionI } from 'src/app/models/HabitacionI';

import { HabitacionService } from 'src/app/services/habitacion.service';



@Component({
  selector: 'app-show-habitacion',
  templateUrl: './show-habitacion.component.html',
  styleUrls: ['./show-habitacion.component.css']
})
export class ShowHabitacionComponent implements OnInit {

  public habitacion: HabitacionI [] = []
  public displayedColumns: string [] = ["id","Tipo_De_Habitaciones"]

  constructor(

    private habitacionService: HabitacionService,
    private rooter: Router
  ) { }

  ngOnInit(): void {
    this.mostrarHabitacion();
  }

  mostrarHabitacion(){
    this.habitacionService.getHabitacion()
    .subscribe({
      next:(data)=> {
      this.habitacion = data
      console.log(data)

      }
      
    }) 

  }

}
