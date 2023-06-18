import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/users.interface';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  listaUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/users`)
  }
  
  // logout(): void {
  //   this.isAuthenticated = false;
  // }

  // isLoggedIn(): boolean {
  //   return this.isAuthenticated;
  // }
}