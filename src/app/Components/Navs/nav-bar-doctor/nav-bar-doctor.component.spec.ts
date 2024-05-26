import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDoctorComponent } from './nav-bar-doctor.component';

describe('NavBarDoctorComponent', () => {
  let component: NavBarDoctorComponent;
  let fixture: ComponentFixture<NavBarDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavBarDoctorComponent]
    });
    fixture = TestBed.createComponent(NavBarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
