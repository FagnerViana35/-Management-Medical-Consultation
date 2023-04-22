import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../interfaces/medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  cadastrar(medico: Medico): Observable<Medico> {
    console.log(medico);
    return this.http.post<any>(`${this.apiUrl}/medicos`, medico);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/medicos`, { email, password });
  }
}