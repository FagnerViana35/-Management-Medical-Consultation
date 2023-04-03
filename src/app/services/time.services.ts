import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../interfaces/Time.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class HorariosService {
    apiUrl: string = 'http://localhost:3000'
    constructor(private http: HttpClient) {}
  
    getHorarios(): Observable<Horario[]> {
      return this.http.get<Horario[]>(`${this.apiUrl}/medicos`);
    }

    getMedicoById(medicoId: number): Observable<Horario[]> {
      const url = `${this.apiUrl}/horarios/?medicoId=${medicoId}`;
        return this.http.get<Horario[]>(url);
      }

    updateHorario(id: Horario, updateObject: any): Observable<Horario> {
      console.log(updateObject)
      const url = `${this.apiUrl}/horarios/${id}`;
      return this.http.put<any>(url, updateObject);
    }

    salvarHorariosSelecionados(horariosSelecionados: Horario[]) {
      return this.http.post(`${this.apiUrl}/horarios`, horariosSelecionados);
    }
  }
