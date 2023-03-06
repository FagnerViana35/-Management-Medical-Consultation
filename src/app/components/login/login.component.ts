import { DialogErrorAcceptComponent } from './../dialog-error-accept/dialog-error-accept.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = 'gcampos@ccab.org.br';
  password: string = 'Teste@123';
  dadoFormulario: any;

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  dadosFormularios($event: any) {
    this.dadoFormulario = $event.value;
    console.log('Chegou', this.dadoFormulario);
  }

  login() {
    console.log('Aqui')
    if (this.email != this.dadoFormulario.username || this.password != this.dadoFormulario.password) {
      alert('Verificar a Senha ou Email');
      return;
    }
  }
  ngOnInit(): void {
  }
}