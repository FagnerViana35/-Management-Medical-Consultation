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
  private apiUrl = 'https://localhost:7211/api';
  isAuthenticated: boolean = true;
  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    console.log(usuario);
    return this.http.post<any>(`${this.apiUrl}/AdicionaUsuarioIdentity`, usuario);
  }

  login(loginData: LoginData): Observable<LoginData> {
    const { email, senha } = loginData;
    return this.http.post<LoginData>(`${this.apiUrl}/CriarTokenIdentity`, { email, senha })
    .pipe(
      take(1),
      tap((response) => {
        //Posso fazer logica aqui entro tbem
        console.log(response)
      })
    )
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    this.token = user && typeof user === 'object' ? user.token : '';
    console.log(this.token)
    return this.token;
  }

  
  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}