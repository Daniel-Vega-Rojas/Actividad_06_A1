import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

import {HabitacionI} from '../models/HabitacionI'

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/habitaciones`;



  constructor(

    private http: HttpClient
    
  ) { }

  getHabitacion(): Observable<HabitacionI[]> {

    return this.http.get<HabitacionI[]>(this.base_path)
     
  }
}


