import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaI } from 'src/app/models/CategoriaI';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group({

    iva:                  ['', Validators.required],
    descripcion:         ['', Validators.required],
    status:               ['', Validators.required]
  })

  constructor(

    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {


  }

  onSubmit(): void {

    const formValue: CategoriaI = this.formulario.value;
    this.categoriaService.createCategoria(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Categoria Creada Con Exito ;)', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/categorias');
      },
      err => {
        this.snackBar.open(
          'Tipo de Ctaegoria no fue creado correctamente *f* ','ERROR', {
            duration: 5000,
          }
        )
      }
    )
  } 

}
