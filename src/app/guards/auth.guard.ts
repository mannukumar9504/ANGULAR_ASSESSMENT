import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //implment guard logic here
  return true;
};
