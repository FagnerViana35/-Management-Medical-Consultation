import { DialogErrorAcceptComponent } from './../dialog-error-accept/dialog-error-accept.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss']
})
export class LoginFormularioComponent {
  loginForm!: FormGroup;

  username: string = 'gcampos@ccab.org.br';
  senha: string = 'Teste@123';

  constructor(private dialog: MatDialog, private router: Router){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  @Output() dadosFormulario = new EventEmitter<any>();
  get title(){
    return this.loginForm.get('username')!;
  }
  get description(){
    return this.loginForm.get('password')!;
  }


  submit(){
    const form = this.loginForm.value;
    if (this.username != form.username || this.senha != form.password) {
      this.dialog.open(DialogErrorAcceptComponent);
      return;
    }else{
      this.router.navigate(['']);
    }
    if(this.loginForm.invalid){
      return;
    }
    this.dadosFormulario.emit(this.loginForm);
    console.log(this.loginForm.value);
  }
}
