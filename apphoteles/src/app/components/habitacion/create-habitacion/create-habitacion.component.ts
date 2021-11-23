import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HabitacionI } from 'src/app/models/HabitacionI';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-habitacion',
  templateUrl: './create-habitacion.component.html',
  styleUrls: ['./create-habitacion.component.css']
})
export class CreateHabitacionComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group({

    Tipo_De_Habitaciones: ['', Validators.required],
    status:               ['', Validators.required]
  })

  constructor(

    private formBuilder: FormBuilder,
    private habitacionService: HabitacionService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {


  }

  onSubmit(): void {

    const formValue: HabitacionI = this.formulario.value;
    this.habitacionService.createHabitacion(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Habitacion Creada Con Exito ;)', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/habitaciones');
      },
      err => {
        this.snackBar.open(
          'Tipo de habitacion no fue creado correctamente *f* ','ERROR', {
            duration: 5000,
          }
        )
      }
    )
  } 

}
