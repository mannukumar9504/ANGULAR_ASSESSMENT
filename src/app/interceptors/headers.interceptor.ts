import { HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const cookies = document.cookie.split(';');
  const cookiesList: any = {};
  for (let cookie of cookies) {
    let key_value = cookie.split('=');
    cookiesList[key_value[0]] = `Bearer ${key_value[1]}`;
  };
  console.log("req===>",req);
  req = req.clone({
    setHeaders: {
      'auth-token': cookiesList['auth-token']
    }
  })
  return next(req);
};
