import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cadastro-medico-formulario',
  templateUrl: './cadastro-medico-formulario.component.html',
  styleUrls: ['./cadastro-medico-formulario.component.css']
})
export class CadastroMedicoFormularioComponent {

  cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private medicoService: MedicoService){}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
    'nomeCompleto': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required]),
    'crm': new FormControl('', [Validators.required]),
    'senha': new FormControl('', [Validators.required, Validators.minLength(6)])
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

  onSubmit() {
    const medico: any = this.cadastroForm.value;
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
