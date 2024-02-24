import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CONSTANT } from '../constants/constant'

export const authGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService);
  const router = inject(Router);
  const sanckbar = inject(MatSnackBar);
  //implment guard logic here
  const cookie_value = cookie.get('auth-token')?.length > 2 ? true : false;
  if(!cookie_value) {
    sanckbar.open(CONSTANT.NOT_AUTHORIZED, "back", {duration: 2000});
    router.navigate(['/login']);
  }

  return cookie_value;
};
