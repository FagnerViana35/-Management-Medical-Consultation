import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';
import { Usuario } from 'src/app/interfaces/users.interface';
import { AuthService } from 'src/app/services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-formulario',
  templateUrl: './cadastro-formulario.component.html',
  styleUrls: ['./cadastro-formulario.component.scss']
})
export class CadastroFormularioComponent {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){}

  cadastroForm!: FormGroup;
  typeUser: boolean = false;
  tipo_template!: number;

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
      'name': new FormControl('', [Validators.required]),
      'surname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'cpf': new FormControl(''),
      'crm': new FormControl(''),
      'senha': new FormControl('', [Validators.required, this.senhaValidator]),
      'role': new FormControl(false, [Validators.required]),
      'especialidade':  new FormControl(''),
    }
    );
  }

  isChecked: boolean = false;

  get name(){
    return this.cadastroForm.get('nome')!;
  }
  get surname(){
    this.tipo_template = 1;
    console.log(this.tipo_template)
    return this.cadastroForm.get('surname')!;
  }
  get crm(){
    return this.cadastroForm.get('crm')!;
  }
  get senha(){
    return this.cadastroForm.get('senha')!;
  }
  get email(){
    return this.cadastroForm.get('email')!;
  }
  get cpf(){
    return this.cadastroForm.get('cpf')!;
  }
  get role(){
    return this.cadastroForm.get('senha')!;
  }

  get especialidade(){
    return this.cadastroForm.get('especialidade')!;
  }

  handleChange(event: any) {
    this.typeUser = event.target.checked;
    this.cadastroForm.get('role')?.setValue(this.typeUser);
    console.log(this.cadastroForm)
  }
  
  onSubmit() {
    console.log('Formulario', this.cadastroForm);
  
    // Marcar todos os campos como tocados para acionar as validações
    this.cadastroForm.markAllAsTouched();
  
    if (this.cadastroForm.valid) {
      const usuario: Usuario = this.cadastroForm.value;
      this.cadastroForm.value.role = this.cadastroForm.value.role ? 1 : 0; // Converte true para 1 e false para 0
  
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
      );
    } else {
      // O formulário contém erros, exiba uma mensagem de erro ou tome outra ação apropriada.
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
  

}
