import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMedicalComponent } from './table-medical.component';

describe('TableMedicalComponent', () => {
  let component: TableMedicalComponent;
  let fixture: ComponentFixture<TableMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
