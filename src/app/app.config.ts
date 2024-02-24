import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './interceptors/headers.interceptor';
import { errorInterceptorInterceptor } from './interceptors/errorInterceptor/error-interceptor.interceptor';
import { loggingInterceptorInterceptor } from './interceptors/loggingInterceptor/logging-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(BrowserAnimationsModule,HttpClientModule), provideAnimations(),
  provideHttpClient(withInterceptors([headersInterceptor, errorInterceptorInterceptor, loggingInterceptorInterceptor]), withFetch())],
};
