import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { ReservaI } from 'src/app/models/ReservaI';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.css']
})
export class CreateReservaComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group({

    Fecha_Ingreso: ['', Validators.required],
    Hora_Ingreso:  ['', Validators.required],
    Fecha_Salida:  ['', Validators.required],
    status:        ['', Validators.required]
  })
  
  constructor(

    private formBuilder: FormBuilder,
    private reservaService: ReservaService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {


  }

  onSubmit(): void {

    const formValue: ReservaI = this.formulario.value;
    this.reservaService.createReserva(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Reserva Creada Con Exito ;)', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/reserva');
      },
      err => {
        this.snackBar.open(
          'Tipo de reserva no fue creado correctamente *f* ','ERROR', {
            duration: 5000,
          }
        )
      }
    )
  } 

}
