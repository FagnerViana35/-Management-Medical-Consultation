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


  // submit(){
  //   const form = this.loginForm.value;
  //   if (this.email != form.email || this.senha != form.senha) {
  //     this.dialog.open(DialogErrorAcceptComponent);
  //     return;
  //   }else{
  //     this.router.navigate(['']);
  //   }
  //   if(this.loginForm.invalid){
  //     return;
  //   }
  //   this.dadosFormulario.emit(this.loginForm);
  //   console.log(this.loginForm.value);
  // }
  login() {
      this.medicoService.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe(response => {
        if (response.length === 1) {
          this.router.navigate(['/']);
        } else {
          console.log("Erro de autenticação")
        }
      });
  }
}
