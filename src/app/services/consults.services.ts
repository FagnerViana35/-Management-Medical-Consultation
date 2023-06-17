import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { Consulta } from '../interfaces/consulta.interface';

@Injectable({
    providedIn: 'root'
  })
  export class ConsultasService {
    apiUrl: string = 'https://localhost:7211/api'
    constructor(private http: HttpClient) {}
  
    getListConsults(): Observable<Consulta[]> {
      return this.http.get<Consulta[]>(`${this.apiUrl}/ListConsults`)
      .pipe(
        take(1),
        tap((response) => {
          //Posso fazer logica aqui entro tbem
          console.log(response)
        })
      );
    }

    // getMedicos(): Observable<Horario[]> {
    //   return this.http.get<Horario[]>(`${this.apiUrl}/medicos`);
    // }

    // getMedicoById(medicoId: number): Observable<Horario[]> {
    //   const url = `${this.apiUrl}/consultas/?medicoId=${medicoId}`;
    //     return this.http.get<Horario[]>(url);
    //   }

    // updateHorario(id: Horario, updateObject: any): Observable<Horario> {
    //   console.log(updateObject)
    //   const url = `${this.apiUrl}/consultas/${id}`;
    //   return this.http.put<any>(url, updateObject);
    // }
    
    // salvarHorariosSelecionados(horariosSelecionados: Horario[]) {
    //   return this.http.post(`${this.apiUrl}/consultas`, horariosSelecionados);
    // }
  }
