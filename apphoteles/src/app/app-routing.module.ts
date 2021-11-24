import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHabitacionComponent } from './components/habitacion/create-habitacion/create-habitacion.component';
import { ShowHabitacionComponent } from './components/habitacion/show-habitacion/show-habitacion.component';
import { ShowCategoriaComponent } from './components/categoria/show-categoria/show-categoria.component';
import { CreateCategoriaComponent } from './components/categoria/create-categoria/create-categoria.component';
import { ShowAgenciaComponent } from './components/agencia/show-agencia/show-agencia.component';
import { CreateAgenciaComponent } from './components/agencia/create-agencia/create-agencia.component';
import { ShowPersonaComponent } from './components/persona/show-persona/show-persona.component';
import { CreatePersonaComponent } from './components/persona/create-persona/create-persona.component';
import { ShowReservaComponent } from './components/reserva/show-reserva/show-reserva.component';
import { CreateReservaComponent } from './components/reserva/create-reserva/create-reserva.component';


const routes: Routes = [

  {
  path: "habitaciones",
  component: ShowHabitacionComponent
  },

  {
  path: "crearhabitaciones",
  component: CreateHabitacionComponent
  },

  {
  path: "categorias",
  component: ShowCategoriaComponent
  },
  
  {
  path: "crearcategorias",
  component: CreateCategoriaComponent
  },

  {
  path: "agencias",
  component: ShowAgenciaComponent
  },
    
  {
  path: "crearagencias",
  component: CreateAgenciaComponent
  },

  {
  path: "personas",
  component: ShowPersonaComponent
  },
    
  {
  path: "crearpersonas",
  component: CreatePersonaComponent
  },

  {
  path: "reservas",
  component: ShowReservaComponent
  },
      
  {
  path: "crearreservas",
  component: CreateReservaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
