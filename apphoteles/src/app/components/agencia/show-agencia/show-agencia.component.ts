import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
// poner por si nos irve la de arriba *
import { AgenciaI } from 'src/app/models/AgenciaI';

import { AgenciaService } from 'src/app/services/agencia.service';



@Component({
  selector: 'app-show-agencia',
  templateUrl: './show-agencia.component.html',
  styleUrls: ['./show-agencia.component.css']
})
export class ShowAgenciaComponent implements OnInit {

  public agencias: AgenciaI [] = []
  public displayedColumns: string [] = ["id","nombre","direccion","telefono","ciudad","status"]

  constructor(

    private agenciaService: AgenciaService,
    private rooter: Router
  ) { }

  ngOnInit(): void {
    this.mostrarAgencia();
  }

  mostrarAgencia(){
    this.agenciaService.getAgencia()
    .subscribe({
      next:(data)=> {
      this.agencias = data
      console.log(data)

      }
      
    }) 

  }

}
