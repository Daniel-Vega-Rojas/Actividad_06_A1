import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelI } from 'src/app/models/HotelI';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group({

    Nombre_De_Hotel:      ['', Validators.required],
    Direccion:            ['', Validators.required],
    fecha_De_Construccion:  ['', Validators.required],
    status:               ['', Validators.required]
  })

  constructor(

    private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {


  }

  onSubmit(): void {

    const formValue: HotelI = this.formulario.value;
    this.hotelService.createHotel(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Hotel Creado Con Exito ;)', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/hoteles');
      },
      err => {
        this.snackBar.open(
          'El Hotel no fue creado correctamente *f* ','ERROR', {
            duration: 5000,
          }
        )
      }
    )
  } 

}
