import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {ToastType} from '../app-dialog/model/toast';

/**
 * General error handler for all http requests.
 */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  /** @ignore */
  constructor(private authService: AuthService,
              private toastService: ToastService) {
  }

  /** @ignore */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 403:
                console.log('access denied: Log Out...');
                this.toastService.show({text: 'Session timeout', type: ToastType.WARNING});
                this.authService.logOut();
                break;
              case 504:
                this.toastService.show({text: 'Gateway timeout', type: ToastType.DANGER});
                break;
              case 0:
                this.toastService.show({text: 'Connection refused', type: ToastType.DANGER});
                break;
              default:
                return throwError(err);
            }
            return of(null);
          }

          console.log('error status')
          this.toastService.show({text: 'Application Error', type: ToastType.DANGER});
          return of(null);
        }));
  }
}
