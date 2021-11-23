import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

import {ReservaI} from '../models/ReservaI'

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/reservas`;



  constructor(

    private http: HttpClient
    
  ) { }

  getReserva(): Observable<ReservaI[]> {

    return this.http.get<ReservaI[]>(this.base_path)
     
  }
}


