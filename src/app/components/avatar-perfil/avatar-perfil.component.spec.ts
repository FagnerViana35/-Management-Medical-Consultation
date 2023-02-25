import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPerfilComponent } from './avatar-perfil.component';

describe('AvatarPerfilComponent', () => {
  let component: AvatarPerfilComponent;
  let fixture: ComponentFixture<AvatarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
