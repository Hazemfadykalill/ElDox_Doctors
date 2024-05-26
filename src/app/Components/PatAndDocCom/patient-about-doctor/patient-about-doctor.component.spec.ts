import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAboutDoctorComponent } from './patient-about-doctor.component';

describe('PatientAboutDoctorComponent', () => {
  let component: PatientAboutDoctorComponent;
  let fixture: ComponentFixture<PatientAboutDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatientAboutDoctorComponent]
    });
    fixture = TestBed.createComponent(PatientAboutDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
