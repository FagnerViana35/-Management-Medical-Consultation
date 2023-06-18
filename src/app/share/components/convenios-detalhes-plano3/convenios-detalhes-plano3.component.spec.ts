import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosDetalhesPlano3Component } from './convenios-detalhes-plano3.component';

describe('ConveniosDetalhesPlano3Component', () => {
  let component: ConveniosDetalhesPlano3Component;
  let fixture: ComponentFixture<ConveniosDetalhesPlano3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveniosDetalhesPlano3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConveniosDetalhesPlano3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
