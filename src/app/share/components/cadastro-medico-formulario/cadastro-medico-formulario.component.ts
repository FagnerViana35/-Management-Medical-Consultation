import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Medical } from 'src/app/interfaces/medical.interface';
import { Medico } from 'src/app/interfaces/medico.interface';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cadastro-medico-formulario',
  templateUrl: './cadastro-medico-formulario.component.html',
  styleUrls: ['./cadastro-medico-formulario.component.css']
})
export class CadastroMedicoFormularioComponent {

  cadastroForm!: FormGroup;
  especialidades = [  'Cardiologia',  'Dermatologia',  'Endocrinologia',  'Ginecologia',  'Neurologia',  'Oftalmologia',  'Ortopedia',  'Pediatria'];
  
  constructor(private formBuilder: FormBuilder, private medicoService: MedicoService){}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
    'nomeCompleto': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required]),
    'crm': new FormControl('', [Validators.required]),
    'senha': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'especialidade': new FormControl('', [Validators.required, Validators.minLength(6)])
  }
  );
  }

  get nomeCompleto(){
    return this.cadastroForm.get('nomeCompleto')!;
  }
  get email(){
    return this.cadastroForm.get('email')!;
  }
  get crm(){
    return this.cadastroForm.get('crm')!;
  }
  get senha(){
    return this.cadastroForm.get('senha')!;
  }
  get especialidade(){
    return this.cadastroForm.get('senha')!;
  }

  onSubmit() {
    const medico: Medico = this.cadastroForm.value;
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
