import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/users.interface';
import { Observable } from 'rxjs';
import { LoginData } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated = false;
  token: string = '';
  private apiUrl = 'https://localhost:7036/api';

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    console.log(usuario);
    return this.http.post<any>(`${this.apiUrl}/AdicionaUsuarioIdentity`, usuario);
  }

  login(loginData: LoginData): boolean {
    const { email, senha, cpf } = loginData;
    console.log('Titulo:',loginData);
    this.http.post(`${this.apiUrl}/CriarTokenIdentity`, { email, senha, cpf }).subscribe(
      (response: any) => {
        this.token = response;
        this.getToken()
        if (response.authenticated) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      },
      (error: any) => {
        this.isAuthenticated = false;
      }
    );

    return this.isAuthenticated;
  }

  getToken(): string {
    const token = localStorage.setItem('token', this.token);
    console.log('token', token);
    return this.token; 
  }
  
  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}