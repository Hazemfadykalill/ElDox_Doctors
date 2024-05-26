import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { doctorsGuard } from './doctors.guard';

describe('doctorsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => doctorsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
