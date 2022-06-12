import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categorias';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListCategoriasService {
  private apiUrl = 'http://localhost:3000/categorias'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>( this.apiUrl)
  }
}
