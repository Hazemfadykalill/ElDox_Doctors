import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPatientsComponent } from './booking-patients.component';

describe('BookingPatientsComponent', () => {
  let component: BookingPatientsComponent;
  let fixture: ComponentFixture<BookingPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookingPatientsComponent]
    });
    fixture = TestBed.createComponent(BookingPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
