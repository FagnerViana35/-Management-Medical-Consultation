import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Medical } from 'src/app/interfaces/medical.interface';
import { Medico } from 'src/app/interfaces/medico.interface';
import { AuthService } from 'src/app/services/AuthService';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cadastro-medico-formulario',
  templateUrl: './cadastro-medico-formulario.component.html',
  styleUrls: ['./cadastro-medico-formulario.component.css']
})
export class CadastroMedicoFormularioComponent {

  cadastroForm!: FormGroup;
  // especialidades = [  'Cardiologia',  'Dermatologia',  'Endocrinologia',  'Ginecologia',  'Neurologia',  'Oftalmologia',  'Ortopedia',  'Pediatria'];
  meuCheckbox: boolean =  false
  
  constructor(private formBuilder: FormBuilder, private medicoService: MedicoService, private authService: AuthService){}

  // ngOnInit() {
  //   this.cadastroForm = this.formBuilder.group({
  //   'nomeCompleto': new FormControl('', [Validators.required]),
  //   'email': new FormControl('', [Validators.required]),
  //   'crm': new FormControl('', [Validators.required]),
  //   'senha': new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   'especialidade': new FormControl('', [Validators.required, Validators.minLength(6)])
  // }
  // );
  // }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
    'titulo': new FormControl('', [Validators.required]),
    'meuCheckbox': new FormControl('', [Validators.required])
  }
  );
  }

  get titulo(){
    return this.cadastroForm.get('nomeCompleto')!;
  }
  get checkbox(){
    return this.cadastroForm.get('email')!;
  }

  onSubmit() {
    const idUsuario = this.authService.getToken();
    console.log(idUsuario); 
    const medico: Medico = this.cadastroForm.value;
    console.log('Titulo',medico)
    this.medicoService.cadastrar(medico).subscribe(
      (res) => {
        console.log('Cadastro realizado com sucesso!');
      },
      (err) => {
        console.error('Erro ao cadastrar usuário:', err);
      }
    );
  }
  
}
