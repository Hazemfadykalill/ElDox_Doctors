import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDoctorComponent } from './login-doctor.component';

describe('LoginDoctorComponent', () => {
  let component: LoginDoctorComponent;
  let fixture: ComponentFixture<LoginDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginDoctorComponent]
    });
    fixture = TestBed.createComponent(LoginDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
