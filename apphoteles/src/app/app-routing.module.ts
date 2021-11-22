import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHabitacionComponent } from './components/habitacion/create-habitacion/create-habitacion.component';
import { ShowHabitacionComponent } from './components/habitacion/show-habitacion/show-habitacion.component';
import { ShowCategoriaComponent } from './components/categoria/show-categoria/show-categoria.component';
import { CreateCategoriaComponent } from './components/categoria/create-categoria/create-categoria.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
