import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDocAndPatComponent } from './footer-doc-and-pat.component';

describe('FooterDocAndPatComponent', () => {
  let component: FooterDocAndPatComponent;
  let fixture: ComponentFixture<FooterDocAndPatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterDocAndPatComponent]
    });
    fixture = TestBed.createComponent(FooterDocAndPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
