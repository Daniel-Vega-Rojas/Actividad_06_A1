import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { PersonaI } from 'src/app/models/PersonaI';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.css']
})
export class CreatePersonaComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group({

    nombre:    ['', Validators.required],
    apellido:   ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required],
    status:   ['', Validators.required]
  })

  constructor(

    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {


  }

  onSubmit(): void {

    const formValue: PersonaI = this.formulario.value;
    this.personaService.createPersona(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Persona Creada Con Exito ;)', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/personas');
      },
      err => {
        this.snackBar.open(
          'Persona  no fue creado correctamente *f* ','ERROR', {
            duration: 5000,
          }
        )
      }
    )
  } 

}
