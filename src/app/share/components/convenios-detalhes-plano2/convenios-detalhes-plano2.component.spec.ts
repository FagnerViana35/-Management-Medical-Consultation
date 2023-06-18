import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosDetalhesPlano2Component } from './convenios-detalhes-plano2.component';

describe('ConveniosDetalhesPlano2Component', () => {
  let component: ConveniosDetalhesPlano2Component;
  let fixture: ComponentFixture<ConveniosDetalhesPlano2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveniosDetalhesPlano2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConveniosDetalhesPlano2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
