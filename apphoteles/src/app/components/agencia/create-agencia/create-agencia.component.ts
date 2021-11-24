import { Component, OnInit } from '@angular/core';
import { AgenciaService } from 'src/app/services/agencia.service';
import { AgenciaI } from 'src/app/models/AgenciaI';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-agencia',
  templateUrl: './create-agencia.component.html',
  styleUrls: ['./create-agencia.component.css']
})
export class CreateAgenciaComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group({

    nombre:     ['', Validators.required],
    direccion:  ['', Validators.required],
    telefono:   ['', Validators.required],
    ciudad:     ['', Validators.required],
    status:     ['', Validators.required]
  })

  constructor(

    private formBuilder: FormBuilder,
    private agenciaService: AgenciaService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {


  }

  onSubmit(): void {

    const formValue: AgenciaI = this.formulario.value;
    this.agenciaService.createAgencia(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Agencia Creada Con Exito ;)', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/agencias');
      },
      err => {
        this.snackBar.open(
          'La Agencia no fue creado correctamente *f* ','ERROR', {
            duration: 5000,
          }
        )
      }
    )
  } 

}
