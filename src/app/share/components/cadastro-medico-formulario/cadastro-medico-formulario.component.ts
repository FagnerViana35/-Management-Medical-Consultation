import { Subscription, take, tap } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/AuthService';
import { LoginData } from '../../../interfaces/login.interface';
import { MedicoService } from '../../../services/medico.service';
import { Medico } from '../../../interfaces/medico.interface';
import { HorariosService } from 'src/app/services/time.services';

@Component({
  selector: 'app-cadastro-medico-formulario',
  templateUrl: './cadastro-medico-formulario.component.html',
  styleUrls: ['./cadastro-medico-formulario.component.css']
})
export class CadastroMedicoFormularioComponent implements OnInit{
  loginForm!: FormGroup;
  subscription!: Subscription;
  olho:boolean = false;
  constructor(private router: Router, private medicoService: MedicoService, private formBuilder: FormBuilder, private horariosService: HorariosService){}
  
  
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
      'senha': new FormControl('', [Validators.required, this.senhaValidator]),
      'nome': new FormControl('', [Validators.required]),
      'crm': new FormControl('', [Validators.required]),
      'especialidade': new FormControl('', [Validators.required]),
      }
    );
  }

  get email(){
    return this.loginForm.get('email')!;
  }
  get senha(){
    return this.loginForm.get('senha')!;
  }
  get nome(){
    return this.loginForm.get('nome')!;
  }
  get crm(){
    return this.loginForm.get('crm')!;
  }
  get especialidade(){
    return this.loginForm.get('especialidade')!;
  }
  handleCheckboxChange(event:any){
    if(event.target.checked === true) this.olho = true;
    else this.olho = false;
  }

  registrar(): void {
    const cadastroData: Medico = {
      nome: `Dr(a). ${this.nome.value}`,
      email: this.email.value,
      crm: `CRM/SP-${this.crm.value}`,
      senha: this.senha.value,
      especialidade: this.especialidade.value,
    };
     this.subscription = this.horariosService.getMedicos().pipe(
      take(1),
      tap((response) => {
        // Verificar se o e-mail já está cadastrado
        const emailExistente = response.some((medico) => medico.email === cadastroData.email);
        if (emailExistente) {
          alert("E-mail já cadastrado! Por favor, utilize outro e-mail.");
          console.log("E-mail já cadastrado");
          return;
        }else{
          // Proceder com o cadastro
          this.medicoService.cadastrarMedico(cadastroData).subscribe({
            next: (response:any) => {
              console.log(response)   
            },
            error: (error) => {
              console.log('Ocorreu um erro:', error);
              alert('Ocorreu um erro. Verifique os dados e tente novamente.');
            },
            complete: () => {
              console.log("Usuário cadastrado");
              this.router.navigate(['/login-medical']);
            }
          });
        }
    
      })
    ).subscribe();
  }
}
