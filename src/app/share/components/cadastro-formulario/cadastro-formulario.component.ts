import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';
import { Usuario } from 'src/app/interfaces/users.interface';
import { Router } from '@angular/router';
import { Subscription, take, tap } from 'rxjs';
import { UserService } from 'src/app/services/userService';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-cadastro-formulario',
  templateUrl: './cadastro-formulario.component.html',
  styleUrls: ['./cadastro-formulario.component.scss']
})
export class CadastroFormularioComponent {

  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService, private router: Router){}

  cadastroForm!: FormGroup;
  typeUser: boolean = false;
  tipo_template!: number;
  subscription! : Subscription;
  olho:boolean = false;
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
    this.cadastroForm = this.formBuilder.group({
      'nome': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'senha': new FormControl('', [Validators.required, this.senhaValidator]),
      'telefone': new FormControl(''),
      'data_nascimento':  new FormControl(''),
    }
    );
  }

  isChecked: boolean = false;

  get nome(){
    return this.cadastroForm.get('nome')!;
  }
  get email(){
    return this.cadastroForm.get('email')!;
  }
  get senha(){
    return this.cadastroForm.get('senha')!;
  }
  get telefone(){
    return this.cadastroForm.get('telefone')!;
  }
  get data_nascimento(){
    return this.cadastroForm.get('data_nascimento')!;
  }

  handleCheckboxChange(event:any){
    if(event.target.checked === true) this.olho = true;
    else this.olho = false;
  }

  
  
  onSubmit() {
    const usuario: Usuario = this.cadastroForm.value;
      this.subscription = this.userService.listaUsuario().pipe(
        take(1),
    tap((response) => {
          const emailExistente = response.some((usuario) => usuario.email === this.cadastroForm.value.email);
        if (emailExistente) {
          alert("Usuário já cadastrado!");
          console.log("Usuário já cadastrado");
          return;
        }else{
          this.authService.cadastrar(usuario).subscribe(
            (res) => {
              console.log('Cadastro realizado com sucesso!');
              this.cadastroForm.reset();
              alert('Cadastro realizado com sucesso');
              this.router.navigate(['']);
            },
            (err) => {
              console.error('Erro ao cadastrar usuário:', err);
              alert('Erro ao cadastrar usuário');
            }
          )
        }}) 
        ).subscribe()
  }
}