import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogErrorAcceptComponent } from './dialog-error-accept.component';

describe('DialogErrorAcceptComponent', () => {
  let component: DialogErrorAcceptComponent;
  let fixture: ComponentFixture<DialogErrorAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogErrorAcceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogErrorAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
