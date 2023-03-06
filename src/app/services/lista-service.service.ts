import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livros } from '../interfaces/livro.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaServiceService {
  urlApi = 'http://localhost:5097/Livro';  

  constructor(private http: HttpClient) { }


  getAllLivros (): Observable<Livros[]> {  
    return this.http.get<Livros[]>(this.urlApi);  
  } 

  postLivros(postData: Livros){
    return this.http.post(this.urlApi, postData);
  }

  getPostById(postId: number) {
    return this.http.get(`${this.urlApi}/${postId}`);
  }

  getPostByName(id: number) {
    const url = `${this.urlApi}/${id}`;
  }
}
