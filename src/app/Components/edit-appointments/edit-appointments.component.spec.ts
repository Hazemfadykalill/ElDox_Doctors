import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppointmentsComponent } from './edit-appointments.component';

describe('EditAppointmentsComponent', () => {
  let component: EditAppointmentsComponent;
  let fixture: ComponentFixture<EditAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditAppointmentsComponent]
    });
    fixture = TestBed.createComponent(EditAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
