import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInvoiceComponent } from './patient-invoice.component';

describe('PatientInvoiceComponent', () => {
  let component: PatientInvoiceComponent;
  let fixture: ComponentFixture<PatientInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatientInvoiceComponent]
    });
    fixture = TestBed.createComponent(PatientInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
