import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentsComponent } from './add-payments.component';

describe('AddPaymentsComponent', () => {
  let component: AddPaymentsComponent;
  let fixture: ComponentFixture<AddPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddPaymentsComponent]
    });
    fixture = TestBed.createComponent(AddPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
