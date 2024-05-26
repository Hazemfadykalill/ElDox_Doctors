import { CanActivateFn } from '@angular/router';

export const notFoundGuard: CanActivateFn = (route, state) => {
  return true;
};
