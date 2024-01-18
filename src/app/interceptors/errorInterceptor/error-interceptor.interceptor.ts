import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const sanckbar = inject(MatSnackBar);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      sanckbar.open(error?.statusText || error.toString(), 'back', {duration: 1000});
      return throwError(error);
  }));
};
