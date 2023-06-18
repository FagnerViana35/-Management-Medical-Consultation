import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/users.interface';
import { Observable, take, tap } from 'rxjs';
import { LoginData } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token!: string;
  private apiUrl = 'http://localhost:3000';
  isAuthenticated: boolean = true;
  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<any>(`${this.apiUrl}/users`, usuario);
  }

  login(email: string, senha: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/users?email=${email}&password=${senha}`);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    this.token = user && typeof user === 'object' ? user.token : '';
    return this.token;
  }

  
  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}