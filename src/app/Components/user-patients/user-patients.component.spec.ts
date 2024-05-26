import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPatientsComponent } from './user-patients.component';

describe('UserPatientsComponent', () => {
  let component: UserPatientsComponent;
  let fixture: ComponentFixture<UserPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserPatientsComponent]
    });
    fixture = TestBed.createComponent(UserPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
