import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.loginUrl, { email, password });
  }
}