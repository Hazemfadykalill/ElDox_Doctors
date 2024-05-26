import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPatientComponent } from './nav-bar-patient.component';

describe('NavBarPatientComponent', () => {
  let component: NavBarPatientComponent;
  let fixture: ComponentFixture<NavBarPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavBarPatientComponent]
    });
    fixture = TestBed.createComponent(NavBarPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
