import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCouponsComponent } from './add-coupons.component';

describe('AddCouponsComponent', () => {
  let component: AddCouponsComponent;
  let fixture: ComponentFixture<AddCouponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddCouponsComponent]
    });
    fixture = TestBed.createComponent(AddCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
