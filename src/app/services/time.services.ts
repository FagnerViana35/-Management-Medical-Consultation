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
  }
