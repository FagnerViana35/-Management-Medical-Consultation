import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'app-cadastro-formulario',
  templateUrl: './cadastro-formulario.component.html',
  styleUrls: ['./cadastro-formulario.component.scss']
})
export class CadastroFormularioComponent {

  constructor(private formBuilder: FormBuilder){}

  cadastroForm!: FormGroup;

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      'fullname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.required, Validators.maxLength(11)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)] ),
      'passwordConfirm': new FormControl('', [Validators.required, Validators.minLength(6)])
    }
    );
  }
  get fullname(){
    return this.cadastroForm.get('fullname')!;
  }
  get email(){
    return this.cadastroForm.get('email')!;
  }
  get phone(){
    return this.cadastroForm.get('phone')!;
  }
  get password(){
    return this.cadastroForm.get('password')!;
  }
  get passwordConfirm(){
    return this.cadastroForm.get('passwordConfirm')!;
  }
  
  onSubmit(){
    if(this.cadastroForm.invalid){
      return;
    }
    console.log(this.cadastroForm.value);
    console.log('console', this.password.value)
  }

}
