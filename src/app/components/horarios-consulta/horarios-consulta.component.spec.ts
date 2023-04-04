import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosConsultaComponent } from './horarios-consulta.component';

describe('HorariosConsultaComponent', () => {
  let component: HorariosConsultaComponent;
  let fixture: ComponentFixture<HorariosConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
