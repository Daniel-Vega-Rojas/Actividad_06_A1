import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

import {PersonaI} from '../models/PersonaI'



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/personas`;



  constructor(

    private http: HttpClient
    
  ) { }

  getPersona(): Observable<PersonaI[]> {

    return this.http.get<PersonaI[]>(this.base_path)
     
  }

  createPersona(data: PersonaI): Observable<PersonaI>{

    return this.http.post<PersonaI>(this.base_path, data)
  }
}


