import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMedicoFormularioComponent } from './cadastro-medico-formulario.component';

describe('CadastroMedicoFormularioComponent', () => {
  let component: CadastroMedicoFormularioComponent;
  let fixture: ComponentFixture<CadastroMedicoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMedicoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMedicoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
