import { Injectable } from '@angular/core';
import { Livro } from '../model/Livros';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListLivosService {
 private apiUrl = 'http://localhost:3000/livros'

  constructor(private http: HttpClient) { }

  // resgata a lista de livos no json
  getAll(): Observable<Livro[]> {
        return this.http.get<Livro[]>(this.apiUrl)
  }

  //cadastra o livro no json-serve em array proprio
  async addLivro(liv : Livro): Promise<any>{
    try {
      // realiza o post no servidor via httpClient
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          "id": String(Math.round(Math.random() * 100)),
          "livro": liv.livro,
          "autor": liv.autor,
          "editora": liv.editora,
          "tipo": liv.tipo,
          "categoria": liv.categoria
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



}
