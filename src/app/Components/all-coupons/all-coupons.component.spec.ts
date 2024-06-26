import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCouponsComponent } from './all-coupons.component';

describe('AllCouponsComponent', () => {
  let component: AllCouponsComponent;
  let fixture: ComponentFixture<AllCouponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllCouponsComponent]
    });
    fixture = TestBed.createComponent(AllCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
