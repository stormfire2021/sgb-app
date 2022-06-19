import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/user'


  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
        return this.http.get<User[]>( this.apiUrl)
  }

  async addUser(user : User): Promise<any>{

    try {
      // realiza o post no servidor via httpClient
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          "id": user.id,
          "username": user.username,
          "email": user.email,
          "password": user.password,
          "permission": user.permission
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
         alert("Ops! Consulta a Fabiula!");
      }else{
        alert("Usuário cadastrado com sucesso!");
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
