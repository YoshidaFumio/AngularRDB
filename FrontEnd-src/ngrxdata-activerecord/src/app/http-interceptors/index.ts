/* "Error Detect" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorDetect } from './error-detect.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorDetect, multi: true },
];