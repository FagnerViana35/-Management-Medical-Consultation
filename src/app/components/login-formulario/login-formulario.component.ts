import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss']
})
export class LoginFormularioComponent {
  loginForm!: FormGroup;

  constructor(){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get title(){
    return this.loginForm.get('username')!;
  }
  get description(){
    return this.loginForm.get('password')!;
  }


  submit(){
    if(this.loginForm.invalid){
      return;
    }
    console.log(this.loginForm.value);
  }


}
