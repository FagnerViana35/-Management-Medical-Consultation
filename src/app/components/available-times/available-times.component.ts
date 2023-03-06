import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-available-times',
  templateUrl: './available-times.component.html',
  styleUrls: ['./available-times.component.scss']
})
export class AvailableTimesComponent {
  horarios: any;
  atualizado!: boolean;

  constructor(public dialogRef: MatDialogRef<AvailableTimesComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.horarios = data.horarios;
    this.horarios.forEach((horario: { selecionado: boolean; }) => {
      horario.selecionado = false;
    });
  }
  atualizarValorCheckbox(horario: any) {
    this.atualizado =  horario.escolhido;
    console.log('Fora', this.atualizado)
  }
  
  salvarSelecionados() {
    const horariosSelecionados: any = [];
    this.horarios.forEach((horario: any) => {
      if (this.atualizado) {
        console.log(horario)
        horariosSelecionados.push(horario);
      }
    });
    console.log('Horários selecionados:', horariosSelecionados);
  }

  ngOnInit(): void {
  }
  

  onNoClick(): void {
    this.dialogRef.close();
    
  }
}
