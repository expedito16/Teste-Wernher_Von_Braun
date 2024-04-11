import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from 'src/app/pages/login/services/login.service';

export const authGuard: CanActivateFn = () => {
  const user = inject(LoginService);
  const router = inject(Router);

  if(user.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
