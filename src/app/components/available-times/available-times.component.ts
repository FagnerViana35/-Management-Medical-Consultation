import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Horario } from 'src/app/interfaces/Time.interface';
import { Medical } from 'src/app/interfaces/medical.interface';
import { HorariosService } from 'src/app/services/time.services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-available-times',
  templateUrl: './available-times.component.html',
  styleUrls: ['./available-times.component.scss']
})
export class AvailableTimesComponent {
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = ['data', 'horario', 'disponivel', 'selecionar-consultar'];
  dataSource = new MatTableDataSource<Medical>(this.ELEMENT_DATA);
  
  horarios: any;
  atualizado!: boolean;
  endpointInput: any;
  menuItemSelected: any;
  isOptionalCookieChecked: boolean = true;
  selection = new SelectionModel<Medical>(true, []);
  listaCheck!: Horario;
  checkedSelecionado: boolean = false;
  updateObject: any;


  constructor(private location: Location, public dialogRef: MatDialogRef<AvailableTimesComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private horarioService: HorariosService) {
    this.horarios = data.horarios;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  onCheckboxChange(row: any, event: any) { 
    if (event.target.checked) {
      this.listaCheck = row.id;
      this.updateObject = {
        ...row,
        escolhido: event.target.checked,
        disponivel: !event.target.checked
      };
      this.checkedSelecionado = event.target.checked;
    } else {
      this.checkedSelecionado = event.target.checked;
    }
  }

  onUpdateHorario(id: any) {
    this.horarioService.updateHorario(id, this.updateObject).subscribe(() => {
      console.log('Horário atualizado com sucesso!');
    });
  }
  
  salvarSelecionados() {
    if (this.checkedSelecionado === true) {
      this.horarios.filter((horario: any) => horario.id);
      this.horarios.forEach((horario: any) => {
        console.log(horario.selecionado)
          this.horarioService.updateHorario(this.listaCheck, this.updateObject).subscribe(
            (response) => {
              console.log('Horário atualizado com sucesso:', response);
              this.dialogRef.close();
              this.location.go(this.location.path());
            },
            (error) => {
              console.error('Erro ao atualizar horário:', error);
            }
          );
      });
    }
  }

  ngOnInit(): void {}
  

  onNoClick(): void {
    this.dialogRef.close();
    
  }
}

// https://stackblitz.com/angular/lrpjroljdly?embed=1&file=app/table-selection-example.html
