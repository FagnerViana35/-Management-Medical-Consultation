import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosDetalhesPlano1Component } from './convenios-detalhes-plano1.component';

describe('ConveniosDetalhesPlano1Component', () => {
  let component: ConveniosDetalhesPlano1Component;
  let fixture: ComponentFixture<ConveniosDetalhesPlano1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveniosDetalhesPlano1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConveniosDetalhesPlano1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
