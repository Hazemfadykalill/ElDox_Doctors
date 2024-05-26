import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPatientsComponent } from './about-patients.component';

describe('AboutPatientsComponent', () => {
  let component: AboutPatientsComponent;
  let fixture: ComponentFixture<AboutPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutPatientsComponent]
    });
    fixture = TestBed.createComponent(AboutPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
