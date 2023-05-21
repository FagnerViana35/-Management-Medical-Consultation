import { DialogErrorAcceptComponent } from './../dialog-error-accept/dialog-error-accept.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/login.interface';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss']
})
export class LoginFormularioComponent {
  loginForm!: FormGroup;
  loginFailed = false;


  constructor(private dialog: MatDialog, private router: Router, private authService: AuthService, private formBuilder: FormBuilder){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'cpf': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'senha': new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }

  @Output() dadosFormulario = new EventEmitter<any>();
  get email(){
    return this.loginForm.get('email')!;
  }
  get senha(){
    return this.loginForm.get('senha')!;
  }
  get cpfUser(){
    return this.loginForm.get('cpf')!;
  }


  // submit(){
  //   const form = this.loginForm.value;
  //   if (this.username != form.username || this.senha != form.password) {
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
  login(): void {
    const loginData: LoginData = {
      email: this.email.value,
      senha: this.senha.value,
      cpf: this.cpfUser.value,
    };

    if (this.authService.login(loginData)) {
      // Autenticação bem-sucedida, redirecionar para a página principal
      this.loginFailed = false;
      // Redirecionar para a página principal ou a rota desejada
    } else {
      // Autenticação falhou, exibir mensagem de erro
      this.loginFailed = true;
    }
  }
}
