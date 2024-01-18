import { HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: {
      'token': 'token hai ye',
      'auth-token': ' auth token hai ye'
    }
  })
  return next(req);
};
