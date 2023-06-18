import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Consulta } from 'src/app/interfaces/consulta.interface';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-area-medica-consultas',
  templateUrl: './area-medica-consultas.component.html',
  styleUrls: ['./area-medica-consultas.component.scss']
})
export class AreaMedicaConsultasComponent {
  cadastroForm!: FormGroup;
  idMedico!: any;

  constructor(private formBuilder: FormBuilder, private medicoService: MedicoService){}

  ngOnInit() {
    const dadosMedico = window.localStorage.getItem('medico');
    this.idMedico = JSON.parse(dadosMedico ?? 'null');
    console.log(this.idMedico[0].id);

    // const idMedicoString = +(localStorage.getItem('medico') || '');
    // this.idMedico = idMedicoString
    // console.log(typeof idMedicoString);
    this.cadastroForm = this.formBuilder.group({
    'date': new FormControl('', [Validators.required]),
    'hora': new FormControl('', [Validators.required]),
  });
  }
  get getDate(){
    return this.cadastroForm.get('date')!;
  }
  get getHora(){
    return this.cadastroForm.get('hora')!;
  }
  // localStorage.setItem('IdMedico', date.id);
  //       localStorage.setItem('NomeMedico', date.nomeCompleto);
  //       localStorage.setItem('EmailMedico', date.email);

  
  onSubmit() {
    const consulta: Consulta = {
      medicoId: this.idMedico[0].id,
      data: this.cadastroForm.value.date,
      hora: this.cadastroForm.value.hora,
      disponivel: true,
      escolhido: false
    };
    // const consulta: Consulta = this.cadastroForm.value;
    this.medicoService.cadastrarConsulta(consulta).subscribe(
      (res) => {
        alert('Consulta cadastrada com sucesso!')
        console.log("Dados Consulta:",res)
        console.log('Cadastro realizado com sucesso!');
        this.cadastroForm.reset({
          date: '',
          hora: ''
        });
      },
      (err) => {
        console.error('Erro ao cadastrar usuário:', err);
      }
    );
  }

}
