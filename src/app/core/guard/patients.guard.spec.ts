import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { patientsGuard } from './patients.guard';

describe('patientsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => patientsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
