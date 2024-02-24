import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const cookies : string[] = document.cookie.split(';');
  const cookiesList: any = {};
  for (let cookie of cookies) {
    let key_value = cookie.split('=');
    cookiesList[key_value[0]] = `Bearer ${key_value[1]}`;
  };
  if(cookiesList['auth-token']?.length) {
  req = req.clone({
    setHeaders: {
      'auth-token': cookiesList['auth-token']
    }
  })
}
  return next(req);
};
