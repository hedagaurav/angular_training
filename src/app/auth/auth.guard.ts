import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const aservice = inject(AuthService);
  const router = inject(Router);

  if(aservice.isLoggedIn){
    console.log('can activate guard authorised.');
    return true;
    
  }
  console.log('can activate guard working');
  return router.parseUrl('');
};
