import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMedicalComponent } from './consult-medical.component';

describe('ConsultMedicalComponent', () => {
  let component: ConsultMedicalComponent;
  let fixture: ComponentFixture<ConsultMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultMedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
