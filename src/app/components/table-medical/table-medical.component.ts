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
  nomeMedico: string = '';
  filtroEspecialidade!: string;
  especialidades: any;
  todasEspecialidades: any;

  constructor(public dialog: MatDialog, private horariosService: HorariosService, private route: ActivatedRoute,) { }

  ELEMENT_DATA: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  gettableDr(): any {
    this.horariosService.getMedicos().subscribe(medicos => {
      this.medicos = medicos
      this.ELEMENT_DATA = this.medicos.map(medico => ({
        id: medico.id,
        nome: medico.nome,
        especialidade: medico.especialidade
      }));
      this.dataSource.data = this.ELEMENT_DATA;
      this.todasEspecialidades = this.medicos
    })
  }


  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  colunas: string[] = ['nome', 'especialidade', 'horario'];

  atualizarPagina(evento: PageEvent) {
    this.paginator.pageIndex = evento.pageIndex;
    this.paginator.pageSize = evento.pageSize;
    this.dataSource.paginator = this.paginator;
  }

  buscarMedico() {
    this.dataSource.filter = this.nomeMedico.trim().toLowerCase();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    let filteredData = this.dataSource.data.filter((item: any) => {
      if (this.filtroEspecialidade === 'todos') {
        return item.nome.toLowerCase().indexOf(filterValue) !== -1;
      } else {
        return item.especialidade === this.filtroEspecialidade && item.nome.toLowerCase().indexOf(filterValue) !== -1;
      }
    });
    this.dataSource.data = filteredData;
  }

  ngOnInit(): void {
    this.especialidades = [...new Set(this.medicos.map(item => item.especialidade))];
    
    console.log(this.ELEMENT_DATA)
    this.medicoId = this.route.snapshot.params['medicoId'];
    this.gettableDr()
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.nome?.toLowerCase().includes(filter);
    };
  }
}
