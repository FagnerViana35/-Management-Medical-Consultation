import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMedicoFormularioComponent } from './login-medico-formulario.component';

describe('LoginMedicoFormularioComponent', () => {
  let component: LoginMedicoFormularioComponent;
  let fixture: ComponentFixture<LoginMedicoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMedicoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMedicoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
