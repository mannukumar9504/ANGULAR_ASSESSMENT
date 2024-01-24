import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next):Observable<HttpEvent<unknown>> => {
  const sanckbar = inject(MatSnackBar);
  const router = inject(Router);
  return next(req).pipe(
    map ((event: HttpEvent<unknown>) => {
      if(event instanceof HttpResponse) {

        let eventBody = JSON.parse(JSON.stringify(event.body));
        let message:string = eventBody["data"]["message"];
        if(event.ok) {
          sanckbar.open(message, "ok", {duration: 1000});
        }
      }
      return event;
    }),
    catchError ((error: HttpErrorResponse) => {
      const error_message = error?.error.message || error.toString() || error?.statusText;
      sanckbar.open(error_message, 'back', {duration: 1000});

      if(error_message === 'Session has been expired Please login again.'){
        document.cookie = `name=auth-token;max-age=0`;
        router.navigate(['/login']);
      }
      return throwError(error);
  }));
};

