import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDoctorsComponent } from './user-doctors.component';

describe('UserDoctorsComponent', () => {
  let component: UserDoctorsComponent;
  let fixture: ComponentFixture<UserDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserDoctorsComponent]
    });
    fixture = TestBed.createComponent(UserDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
