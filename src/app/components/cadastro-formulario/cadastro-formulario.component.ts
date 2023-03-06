import { ListaServiceService } from 'src/app/services/lista-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'app-cadastro-formulario',
  templateUrl: './cadastro-formulario.component.html',
  styleUrls: ['./cadastro-formulario.component.scss']
})
export class CadastroFormularioComponent {

  constructor(private formBuilder: FormBuilder, private livrosService: ListaServiceService){}

  cadastroForm!: FormGroup;

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      'nomeLivro': new FormControl('', [Validators.required]),
      'autor': new FormControl('', [Validators.required]),
      'editora': new FormControl('', [Validators.required, Validators.maxLength(11)]),
      'numeroPaginas': new FormControl('', [Validators.required, Validators.minLength(6)] )
      // 'passwordConfirm': new FormControl('', [Validators.required, Validators.minLength(6)])
    }
    );
  }
  get fullname(){
    return this.cadastroForm.get('nomeLivro')!;
  }
  get email(){
    return this.cadastroForm.get('autor')!;
  }
  get phone(){
    return this.cadastroForm.get('editora')!;
  }
  get password(){
    return this.cadastroForm.get('numeroPaginas')!;
  }
  // get passwordConfirm(){
  //   return this.cadastroForm.get('passwordConfirm')!;
  // }
  
  onSubmit(){
    const postData = this.cadastroForm.value;
    this.livrosService.postLivros(postData).subscribe(response => {
      console.log(response);
    });

    if(this.cadastroForm.invalid){
      return;
    }
    console.log(this.cadastroForm.value);
    console.log('console', this.password.value)
  }

}
