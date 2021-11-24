import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { ShowHabitacionComponent } from './components/habitacion/show-habitacion/show-habitacion.component';
import { CreateHabitacionComponent } from './components/habitacion/create-habitacion/create-habitacion.component';
import { ShowPersonaComponent } from './components/persona/show-persona/show-persona.component';
import { CreatePersonaComponent } from './components/persona/create-persona/create-persona.component';
import { ShowCategoriaComponent } from './components/categoria/show-categoria/show-categoria.component';
import { CreateCategoriaComponent } from './components/categoria/create-categoria/create-categoria.component';
import { ShowAgenciaComponent } from './components/agencia/show-agencia/show-agencia.component';
import { CreateAgenciaComponent } from './components/agencia/create-agencia/create-agencia.component';
import { ShowHotelComponent } from './components/hotel/show-hotel/show-hotel.component';
import { CreateHotelComponent } from './components/hotel/create-hotel/create-hotel.component';
import { ShowReservaComponent } from './components/reserva/show-reserva/show-reserva.component';
import { CreateReservaComponent } from './components/reserva/create-reserva/create-reserva.component';
import { HttpClientModule } from '@angular/common/http';
import { HabitacionService } from './services/habitacion.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { _SnackBarContainer } from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { CategoriaService } from './services/categoria.service';
import { AgenciaService } from './services/agencia.service';
import { PersonaService } from './services/persona.service';
import { ReservaService } from './services/reserva.service';
import { HotelService } from './services/hotel.service';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowHabitacionComponent,
    CreateHabitacionComponent,
    ShowPersonaComponent,
    CreatePersonaComponent,
    ShowCategoriaComponent,
    CreateCategoriaComponent,
    ShowAgenciaComponent,
    CreateAgenciaComponent,
    ShowHotelComponent,
    CreateHotelComponent,
    ShowReservaComponent,
    CreateReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    HabitacionService,
    CategoriaService,
    AgenciaService,
    PersonaService,
    ReservaService,
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
