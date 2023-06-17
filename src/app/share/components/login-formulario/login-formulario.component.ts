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
  token!: string; 

  constructor(private dialog: MatDialog, private router: Router, private authService: AuthService, private formBuilder: FormBuilder){}

  senhaValidator(control: FormControl): { [key: string]: boolean } | null {
    const senha = control.value;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    if (!uppercaseRegex.test(senha) || !numberRegex.test(senha) || !specialCharRegex.test(senha)) {
      return { senhaInvalida: true };
    }
  
    return null;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'senha': new FormControl('', [Validators.required, this.senhaValidator])
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

  login(): void {
    const loginData: LoginData = {
      email: this.email.value,
      senha: this.senha.value,
    };
    this.authService.login(loginData).subscribe({
      next: (response:any) => {
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response));
        
      },
      error: (error) => {
        console.log('Ocorreu um erro:', error);
        alert('Ocorreu um erro verifique os dados e tente novamente.')
      },
      complete: () => {
        console.log("Usuario logado");
        this.router.navigate(['']);
      }
    })
    
    
  }
}

