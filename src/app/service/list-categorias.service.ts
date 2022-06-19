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

  //cadastra a categoria no json-serve em array proprio
  async addCategoria(cat : Categoria): Promise<any>{

    try {
      // realiza o post no servidor via httpClient
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          "id": String(Math.round(Math.random() * 50)),
          "categoria": cat.categoria
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
         alert("Ops! Consulta a Fabiula!");
      }else{
        alert("Cadastro efetuado com sucesso!");
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);

      } else {
        console.log('unexpected error: ', error);

      }
    }
  }

  async deleteCategoria(id:string): Promise<any>{
    console.log("ID:" + id)
    try {
      // realiza o post no servidor via httpClient
      const response = await fetch(`http://localhost:3000/categorias/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })

      if (!response.ok) {
         alert("Ops! Consulta a Fabiula!");
      }else{
        alert("Cadastro excluido com sucesso!");
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);

      } else {
        console.log('unexpected error: ', error);

      }
    }
  }
}
