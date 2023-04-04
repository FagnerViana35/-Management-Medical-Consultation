import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    console.log(usuario);
    return this.http.post<any>(`${this.apiUrl}/users`, usuario);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/users`, { email, password });
  }
}