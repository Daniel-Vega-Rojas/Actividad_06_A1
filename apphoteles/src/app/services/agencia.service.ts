import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

import {AgenciaI} from '../models/AgenciaI'

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/agencias`;



  constructor(

    private http: HttpClient
    
  ) { }

  getAgencia(): Observable<AgenciaI[]> {

    return this.http.get<AgenciaI[]>(this.base_path)
     
  }
}
