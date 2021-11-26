import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
// poner por si nos irve la de arriba nigga*
import { CategoriaI } from 'src/app/models/CategoriaI';

import { CategoriaService } from 'src/app/services/categoria.service';



@Component({
  selector: 'app-show-categoria',
  templateUrl: './show-categoria.component.html',
  styleUrls: ['./show-categoria.component.css']
})
export class ShowCategoriaComponent implements OnInit {

  public categoria: CategoriaI [] = []
  public displayedColumns: string [] = ["id","iva","descripcion"]

  constructor(

    private categoriaServices: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarCategoria();
  }

  mostrarCategoria(){
    this.categoriaServices.getCategoria()
    .subscribe({
      next:(data)=> {
      this.categoria = data
      // console.log(data)

      }
      
    }) 

  }

}
