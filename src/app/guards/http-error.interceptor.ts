import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
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
      .pipe(catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.error.status) {
            case 403:
              console.log('access denied: Log Out...');
              this.toastService.show({text: 'session timeout', type: ToastType.WARNING});
              this.authService.logOut();
              break;
            case 504:
              this.toastService.show({text: 'Gateway timeout', type: ToastType.DANGER});
              break;
            default:
              this.toastService.show({text: 'Can not reach Server', type: ToastType.DANGER});
              return of(null);
          }
          return of(null);
        }

        console.error(err);
        this.toastService.show({text: 'Application Error', type: ToastType.DANGER});
        return of(null);
      }));
  }
}
