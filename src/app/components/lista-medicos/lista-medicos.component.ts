import { ListaServiceService } from './../../services/lista-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Livros } from 'src/app/interfaces/livro.interface';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent {

  dados!: any;
  dado!: Livros[];
 

  constructor(private livro: ListaServiceService){}

  async listarLivros(){
   await this.livro.getAllLivros().subscribe((data: any) =>{
      this.dado = data;
      console.log(this.dado)
    })
  }

  ngOnInit(){ 
    this.listarLivros()
  }
}
