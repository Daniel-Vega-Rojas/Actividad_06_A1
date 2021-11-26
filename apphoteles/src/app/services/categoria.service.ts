import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaI } from '../models/CategoriaI';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
api_url = 'http://localhost:4000';
base_path = `${this.api_url}/categorias`
  
constructor(
    private http: HttpClient
  ) { }

getCategoria():Observable<CategoriaI[]>{
  return this.http.get<CategoriaI[]>(this.base_path)
}
create(data:CategoriaI): Observable<CategoriaI>{
  return this.http.post<CategoriaI>(this.base_path,data)
}
}