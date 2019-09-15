import {inject, TestBed} from '@angular/core/testing';
import {HttpErrorInterceptor} from './http-error.interceptor';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import {UserService} from 'cloudiator-rest-api';
import {RootStoreModule} from '../root-store';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../services/auth.service';
import {ToastService} from '../app-dialog/services/toast.service';


describe('HttpErrorInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppDialogModule,
        RootStoreModule,
        RouterTestingModule
      ],
      providers: [
        HttpErrorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true
        },
        {
          provide: UserService,
          useValue: null
        }
      ]
    });
  });

  beforeEach(inject(
    [AuthService, ToastService],
    (authService: AuthService,
     toastService: ToastService) => {
      spyOn(authService, 'logOut').and.stub();
      spyOn(toastService, 'show').and.stub();
    }));

  it('should create', inject([HttpErrorInterceptor], (interceptor: HttpErrorInterceptor) => {
    expect(interceptor).toBeTruthy();
  }));

  it('should logout on session timeout', inject(
    [AuthService, ToastService, HttpTestingController, HttpClient],
    (authService: AuthService,
     toastService: ToastService,
     httpMock: HttpTestingController,
     http: HttpClient) => {

      return new Promise(async resolve => {
        await http.get('/').subscribe(
          () => fail('request should fail'),
          () => fail('error should have been handled earlier'),
          () => {
            httpMock.verify();
            resolve();
          }
        );

        const httpRequest = httpMock.expectOne('/');
        await httpRequest.flush({}, {status: 403, statusText: 'Forbidden'});
        expect(toastService.show).toHaveBeenCalled();
        expect(authService.logOut).toHaveBeenCalled();
      });
    }
  ));

  it('should error on Gateway Timeout', inject(
    [ToastService, HttpTestingController, HttpClient],
    (toastService: ToastService,
     httpMock: HttpTestingController,
     http: HttpClient) => {
      return new Promise(async resolve => {
        http.get('/').subscribe(
          () => fail('request should fail'),
          () => {
            httpMock.verify();
            resolve();
          },
          () => fail('request should error')
        );

        const httpRequest = httpMock.expectOne('/');
        await httpRequest.flush({}, {status: 504, statusText: 'Gateway Timeout'});
        expect(toastService.show).toHaveBeenCalled();
      });
    }
  ));

  it('should throw other errors', inject(
    [HttpTestingController, HttpClient],
    (httpMock: HttpTestingController,
     http: HttpClient) => {
      return new Promise(async resolve => {
        http.get('/').subscribe(
          () => fail('request should fail'),
          () => {
            httpMock.verify();
            resolve();
          }
        );

        const httpRequest = httpMock.expectOne('/');
        await httpRequest.flush({}, {status: 500, statusText: 'Internal Server Error'});
      });
    }
  ));
});
