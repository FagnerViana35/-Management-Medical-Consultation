import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMedicaConsultasComponent } from './area-medica-consultas.component';

describe('AreaMedicaConsultasComponent', () => {
  let component: AreaMedicaConsultasComponent;
  let fixture: ComponentFixture<AreaMedicaConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaMedicaConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaMedicaConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
