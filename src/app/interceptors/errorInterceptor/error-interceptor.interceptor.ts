import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next):Observable<HttpEvent<unknown>> => {
  const sanckbar = inject(MatSnackBar);
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
      sanckbar.open(error?.statusText || error.toString(), 'back', {duration: 1000});
      return throwError(error);
  }));
};

