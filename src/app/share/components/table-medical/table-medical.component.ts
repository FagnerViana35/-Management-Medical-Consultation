import { Medical } from 'src/app/interfaces/medical.interface';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HorariosService } from 'src/app/services/time.services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-medical',
  templateUrl: './table-medical.component.html',
  styleUrls: ['./table-medical.component.scss']
})


export class TableMedicalComponent {
  horarios: any = [];
  medicos: Medical[] = [];
  medicoId!: number;
  nomeMedico!: string;
  especialidadeMedico: string = '';
  especialidades: any;
  nome: any;
  todasEspecialidades: any;

  constructor(public dialog: MatDialog, private horariosService: HorariosService, private route: ActivatedRoute,) { }

  ELEMENT_DATA: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  gettableDr(): any {
    this.horariosService.getMedicos().subscribe(medicos => {
      console.log(this.medicos)
      this.medicos = medicos
      this.ELEMENT_DATA = this.medicos.map(medico => ({
        id: medico.id,
        nome: medico.nomeCompleto,
        especialidade: medico.especialidade
      }));
      this.dataSource.data = this.ELEMENT_DATA;
      this.todasEspecialidades = this.medicos
      console.log(this.ELEMENT_DATA)
    })
  }
  recarregarDados(){
    this.gettableDr();
    location.reload();
  }
  ngOnChanges(): void {
    this.recarregarDados();
  }

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
    this.gettableDr()
  }
}
