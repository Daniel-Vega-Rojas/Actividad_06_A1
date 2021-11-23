import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

import {HotelI} from '../models/HotelI'

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/hoteles`;



  constructor(

    private http: HttpClient
    
  ) { }

  getHotel(): Observable<HotelI[]> {

    return this.http.get<HotelI[]>(this.base_path)
     
  }
}


