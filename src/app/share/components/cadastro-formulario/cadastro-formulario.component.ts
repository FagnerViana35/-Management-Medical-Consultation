import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';
import { Usuario } from 'src/app/interfaces/users.interface';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-cadastro-formulario',
  templateUrl: './cadastro-formulario.component.html',
  styleUrls: ['./cadastro-formulario.component.scss']
})
export class CadastroFormularioComponent {

  constructor(private formBuilder: FormBuilder, private authService: AuthService){}

  cadastroForm!: FormGroup;

  ngOnInit() {
    //   this.cadastroForm = this.formBuilder.group({
    //   'nome': new FormControl('', [Validators.required]),
    //   'cpf': new FormControl('', [Validators.required]),
    //   'nomeCompleto': new FormControl('', [Validators.required]),
    //   'email': new FormControl('', [Validators.required]),
    //   'senha': new FormControl('', [Validators.required, Validators.minLength(6)])
    // }
    // );
    this.cadastroForm = this.formBuilder.group({
      'cpf': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'senha': new FormControl('', [Validators.required, Validators.minLength(6)])
    }
    );
  }
  // get nome(){
  //   return this.cadastroForm.get('nome')!;
  // }
  // get nomeCompleto(){
  //   return this.cadastroForm.get('nomeCompleto')!;
  // }
  // get email(){
  //   return this.cadastroForm.get('email')!;
  // }
  // get cpf(){
  //   return this.cadastroForm.get('cpf')!;
  // }
  // get senha(){
  //   return this.cadastroForm.get('senha')!;
  // }
  get email(){
    return this.cadastroForm.get('email')!;
  }
  get cpf(){
    return this.cadastroForm.get('cpf')!;
  }
  get senha(){
    return this.cadastroForm.get('senha')!;
  }
  
  onSubmit() {
    console.log('Formulario',this.cadastroForm)
    const usuario: Usuario = this.cadastroForm.value;
    this.authService.cadastrar(usuario).subscribe(
      (res) => {
        console.log('Cadastro realizado com sucesso!');
        this.cadastroForm.reset();
        alert('Cadastro realizado com sucesso');
      },
      (err) => {
        console.error('Erro ao cadastrar usuário:', err);
        alert('Cadastro realizado com sucesso');
      }
    );
  }

}
