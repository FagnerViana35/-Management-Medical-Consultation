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
  olho:boolean = false;
  data: any;
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

  generateToken(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      token += chars[randomIndex];
    }
  
    return token;
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

  handleCheckboxChange(event:any){
    if(event.target.checked === true) this.olho = true;
    else this.olho = false;
  }

  login(): void {
    const loginData: LoginData = {
      email: this.email.value,
      senha: this.senha.value,
    };
    this.authService.login(this.email.value, this.senha.value).subscribe(response => {
      console.log(response);
      this.data = response;
      console.log("DATA:", this.data);
      if (response.length === 1) {
        console.log(response)
        if (response[0].senha === this.loginForm.value.senha) {
          const token = this.generateToken(256); // Gerar token aleatório de 32 caracteres
          localStorage.setItem('token', token); // Armazenar o token no localStorage
          this.router.navigate(['/']);
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

