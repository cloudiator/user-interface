import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {ToastType} from '../model/toast';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private toastService: ToastService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError((err: HttpErrorResponse) => {
          switch (err.error.status) {
            case 403:
              console.log('access denied: Log Out...');
              this.toastService.show({text: 'session timeout', type: ToastType.WARNING});
              this.authService.logOut();
              break;
            default:
             return throwError(err);
          }
          return of(null);
        }));
  }
}
