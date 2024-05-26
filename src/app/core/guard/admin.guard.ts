import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  let x = inject(Router,);
  let y = inject(AuthService);
  // y.decodeToken();

  if (localStorage.getItem("tokenAdmin") != null ) {

    return true;
  }
  else {
    x.navigate(['/auth/loginAdmin']);
    return false;
  }

};
