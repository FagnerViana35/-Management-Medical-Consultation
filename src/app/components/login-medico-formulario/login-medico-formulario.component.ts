import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogErrorAcceptComponent } from '../dialog-error-accept/dialog-error-accept.component';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-login-medico-formulario',
  templateUrl: './login-medico-formulario.component.html',
  styleUrls: ['./login-medico-formulario.component.scss']
})
export class LoginMedicoFormularioComponent {
  loginForm!: FormGroup;
  data: any;
  email: string = '';
  senha: string = '';

  constructor(private dialog: MatDialog, private router: Router, private medicoService: MedicoService){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'senha': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get getEmail(){
    return this.loginForm.get('email')!;
  }
  get getSenha(){
    return this.loginForm.get('senha')!;
  }

  async login() {
   this.medicoService.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe(response => {
      console.log(response);
      this.data = response;
      console.log("DATA:", this.data);
      this.data.map((date: any) => {
        localStorage.setItem('IdMedico', date.id);
        localStorage.setItem('NomeMedico', date.nomeCompleto);
        localStorage.setItem('EmailMedico', date.email);
      });
      if (response.length === 1) {
        if (response[0].senha === this.loginForm.value.senha) {
          this.router.navigate(['/area-medica']);
        } else {
          alert("Erro de Senha! Verifique os dados");
          console.log("Senha incorreta");
        }
      } else {
        alert("Erro de E-mail! Verifique os dados");
        console.log("E-mail incorreto");
      }
    });
  }
  
}
