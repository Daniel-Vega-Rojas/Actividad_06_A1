import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
// poner por si nos irve la de arriba nigga*
import { PersonaI } from 'src/app/models/PersonaI';

import { PersonaService } from 'src/app/services/persona.service';



@Component({
  selector: 'app-show-persona',
  templateUrl: './show-persona.component.html',
  styleUrls: ['./show-persona.component.css']
})
export class ShowPersonaComponent implements OnInit {

  public persona: PersonaI [] = []
  public displayedColumns: string [] = ["id","nombre","apellido","direccion","telefono","status"]

  constructor(

    private personaService: PersonaService,
    private rooter: Router
  ) { }

  ngOnInit(): void {
    this.mostrarPersona();
  }

  mostrarPersona(){
    this.personaService.getPersona()
    .subscribe({
      next:(data)=> {
      this.persona = data
      console.log(data)

      }
      
    }) 

  }

}
