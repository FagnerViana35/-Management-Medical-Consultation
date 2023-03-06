import { Medical } from 'src/app/interfaces/medical.interface';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HorariosService } from 'src/app/services/time.services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AvailableTimesComponent } from '../available-times/available-times.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-medical',
  templateUrl: './table-medical.component.html',
  styleUrls: ['./table-medical.component.scss']
})


export class TableMedicalComponent {
  horarios: any = [];
  medicos: Medical[] = [];
  medicoId!: number;

  dialogRef!: MatDialogRef<AvailableTimesComponent>;

  constructor(public dialog: MatDialog, private horariosService: HorariosService, private route: ActivatedRoute,) { }

  ELEMENT_DATA: any = [];


  gettableDr(): any {
    this.horariosService.getHorarios().subscribe(medicos => {
      this.medicos = medicos
      this.ELEMENT_DATA = this.medicos.map(medico => ({
        id: medico.id,
        nome: medico.nome,
        especialidade: medico.especialidade
      }));
      this.dataSource.data = this.ELEMENT_DATA;
    })
  }


  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  colunas: string[] = ['nome', 'especialidade', 'horario'];

  abrirModal(medicoId: number): void {
    console.log(medicoId);
    if (!this.dialogRef) {
      this.dialog.closeAll();
      console.log('Chegou:')
    }
    this.horariosService.getMedicoById(medicoId).subscribe(horarios => {
      this.horarios = horarios
      const dialog = this.dialog.open(AvailableTimesComponent, {
        width: '500px',
        position: { bottom: '0px', left: '50px' },
        data: {
          horarios: this.horarios,
        }
      });
      dialog.afterClosed().subscribe(result => {
        console.log('A modal foi fechada', result);
      });
    });
  }

  ngOnInit(): void {
    this.medicoId = this.route.snapshot.params['medicoId'];
    this.gettableDr()

  }
}
