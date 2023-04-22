import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Horario } from 'src/app/interfaces/Time.interface';
import { Medical } from 'src/app/interfaces/medical.interface';
import { HorariosService } from 'src/app/services/time.services';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';
import { EmailService } from 'src/app/services/email.service';
import { DialogErrorAcceptComponent } from '../dialog-error-accept/dialog-error-accept.component';

@Component({
  selector: 'app-horarios-consulta',
  templateUrl: './horarios-consulta.component.html',
  styleUrls: ['./horarios-consulta.component.scss']
})
export class HorariosConsultaComponent {

  ELEMENT_DATA: any = [];
  displayedColumns: string[] = ['data', 'horario', 'disponivel', 'selecionar-consultar'];
  dataSource = new MatTableDataSource<Horario>(this.ELEMENT_DATA);
  
  horarios: any;
  atualizado!: boolean;
  endpointInput: any;
  menuItemSelected: any;
  isOptionalCookieChecked: boolean = true;
  selection = new SelectionModel<Medical>(true, []);
  listaCheck!: Horario;
  checkedSelecionado: boolean = false;
  updateObject: any;
  horariosConsulta: any;
  id!: number;

  emailData = {
    from: '',
    fromName: '',
    to: '',
    subject: '',
    bodyHtml: ''
  };

  constructor(
    private emailService: EmailService, 
    private location: Location, 
    private horarioService: HorariosService, 
    private router: ActivatedRoute, 
    public dialog: MatDialog, 
    private route: Router
    ) {}

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
      console.log(this.checkedSelecionado)
    } else {
      this.checkedSelecionado = event.target.checked;
      console.log(this.checkedSelecionado)
    }
  }

  onUpdateHorario(id: any) {
    this.horarioService.updateHorario(id, this.updateObject).subscribe(() => {
      console.log('Horário atualizado com sucesso!');
    });
  }

  salvarSelecionados() {
    if (this.checkedSelecionado === true) {
      this.emailService.sendEmail('Nome do paciente', 'Teste', 'Nome do médico', 'fagner.viana@domvsit.com.br', 'hoje', '28/06/2023')
        .then((response: { status: any; text: any; }) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error: any) => {
          console.log('FAILED...', error);
        });
      this.horariosConsulta.filter((horario: any) => horario.id);
      this.horariosConsulta.forEach((horario: any) => {
          this.horarioService.updateHorario(this.listaCheck, this.updateObject).subscribe(
            (response) => {
                this.route.navigate(['']);
            },
            (error) => {
              console.error('Erro ao atualizar horário:', error);
            }
          );
      });
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogErrorAcceptComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.salvarSelecionados()
        console.log('Usuário clicou em OK');
      } else if (result === 'cancel') {
        console.log('Usuário clicou em Cancelar');
      }
    });
  }
  
  
  back() {
    this.location.back();
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.horarioService.getMedicoById(this.id).subscribe(horarios =>{
      console.log(horarios)
      this.horariosConsulta = horarios;
    })
  }
  

  onNoClick(): void {}

}
