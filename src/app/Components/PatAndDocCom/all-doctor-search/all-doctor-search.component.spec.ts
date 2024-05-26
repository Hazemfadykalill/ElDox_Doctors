import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoctorSearchComponent } from './all-doctor-search.component';

describe('AllDoctorSearchComponent', () => {
  let component: AllDoctorSearchComponent;
  let fixture: ComponentFixture<AllDoctorSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllDoctorSearchComponent]
    });
    fixture = TestBed.createComponent(AllDoctorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
