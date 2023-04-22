import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../interfaces/medico.interface';
import { Consulta } from '../interfaces/consulta.interface';

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

  cadastrarConsulta(consulta: Consulta): Observable<Medico> {
    console.log(consulta);
    return this.http.post<any>(`${this.apiUrl}/consultas`, consulta);
  }

  login(email: string, senha: string) {
    return this.http.get<any>(`${this.apiUrl}/medicos?email=${email}&password=${senha}`);
  }
}