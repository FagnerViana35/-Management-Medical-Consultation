import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { Consulta } from '../interfaces/consulta.interface';
import { Medical } from '../interfaces/medical.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = 'https://localhost:7211/api';

  constructor(private http: HttpClient) { }

  cadastrar(medico: Medical): Observable<Medical> {
    console.log('Teste:',medico);
    return this.http.post<any>(`${this.apiUrl}/Add`, medico);
  }

  listaMedicos(): Observable<Medical> {
    return this.http.get<Medical>(`${this.apiUrl}/ListMedicos`)
    .pipe(
      take(1),
      tap((response) => {
          console.log(response)
      })
    )
  }
  
  login(email: string, senha: string) {
    return this.http.get<any>(`${this.apiUrl}/medicos?email=${email}&password=${senha}`);
  }
}