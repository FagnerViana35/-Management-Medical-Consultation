import { Subscription } from 'rxjs';
import { Medical } from 'src/app/interfaces/medical.interface';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-table-medical',
  templateUrl: './table-medical.component.html',
  styleUrls: ['./table-medical.component.scss']
})


export class TableMedicalComponent implements OnDestroy{
  horarios: any = [];
  // medicos: Medical[] = [];
  medicos: any;
  medicoId!: number;
  nomeMedico!: string;
  especialidadeMedico: string = '';
  especialidades: any;
  nome: any;
  todasEspecialidades: any;
  subscriptions!: Subscription;

  // constructor(public dialog: MatDialog, private horariosService: HorariosService, private route: ActivatedRoute,) { }
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private medicoService: MedicoService) { }

  ELEMENT_DATA: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listaMedicos(): any{
    this.subscriptions = this.medicoService.listaMedicos().subscribe({
      next: (response) => {
        this.medicos = response;
        console.log('teste', this.medicos);
      },
      error: (error) => {
        console.log('Ocorreu um erro:', error);
        // Realize as ações adequadas para tratar o erro aqui
      },
      complete: () => {
        console.log('Deu certo');
        // Ações a serem executadas quando a emissão é concluída (opcional)
      }
    })
  }

  // getListConsults: any {
  //   this.horariosService.getMedicos().subscribe(medicos => {
  //     console.log(this.medicos)
  //     this.medicos = medicos
  //     this.ELEMENT_DATA = this.medicos.map(medico => ({
  //       id: medico.id,
  //       nome: medico.nomeCompleto,
  //       especialidade: medico.especialidade
  //     }));
  //     this.dataSource.data = this.ELEMENT_DATA;
  //     this.todasEspecialidades = this.medicos
  //     console.log(this.ELEMENT_DATA)
  //   })
  // }

  // recarregarDados(){
  //   this.gettableDr();
  //   location.reload();
  // }
  // ngOnChanges(): void {
  //   this.recarregarDados();
  // }

  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  colunas: string[] = ['nome', 'especialidade', 'horario'];

  atualizarPagina(evento: PageEvent) {
    this.paginator.pageIndex = evento.pageIndex;
    this.paginator.pageSize = evento.pageSize;
    this.dataSource.paginator = this.paginator;
  }

  buscarMedicoNome() {
    this.dataSource.filter = this.nomeMedico.trim().toLowerCase();
    console.log(this.dataSource.filter)
  }

  buscarMedicoEspecialidade() {
    this.dataSource.filter = this.especialidadeMedico.trim().toLowerCase();
    console.log(this.dataSource.filter)
  }

  

  ngOnInit(): void {
    this.medicoId = this.route.snapshot.params['medicoId'];
    this.listaMedicos()
  }
  ngOnDestroy(): void {
    if(this.subscriptions)
    {
      this.subscriptions.unsubscribe();
    }
    //https://rxjs-dev.firebaseapp.com/guide/subscription
  }
}
