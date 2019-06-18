import {TestBed, async, inject} from '@angular/core/testing';

import {LoginGuard} from './login.guard';
import {AuthService} from '../services/auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RootStoreModule} from '../root-store';
import {ApiModule} from 'cloudiator-rest-api';
import {RouterTestingModule} from '@angular/router/testing';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import {Observable, of} from 'rxjs';
import {take} from 'rxjs/operators';

describe('LoginGuard', () => {
  const createMockRoute = (id: string) => {
    return {
      params: {id: id}
    } as any;
  };

  const createMockRouteState = () => null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ApiModule,
        RootStoreModule,
        RouterTestingModule,
        AppDialogModule
      ],
      providers: [
        RootStoreModule,
        LoginGuard,
        AuthService
      ]
    });
  });

  it('should create', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should schould correctly reroute to base', inject([LoginGuard], (guard: LoginGuard) => {
    spyOn(guard.authService, 'isLoggedIn').and.returnValue(of(true));
    spyOn(guard.router, 'navigateByUrl').and.stub();
    const route = createMockRoute(null);
    const state = createMockRouteState();

    return new Promise(resolve => {
      (guard.canActivate(route, state) as Observable<boolean>)
        .pipe(take(1))
        .subscribe(bool => {
          expect(bool).toBeFalsy();
          expect(guard.router.navigateByUrl).toHaveBeenCalledWith('/');
          resolve();
        });
    });
  }));

  it('should schould no block authorized routing', inject([LoginGuard], (guard: LoginGuard) => {
    spyOn(guard.authService, 'isLoggedIn').and.returnValue(of(false));
    spyOn(guard.router, 'navigateByUrl').and.stub();
    const route = createMockRoute(null);
    const state = createMockRouteState();

    return new Promise(resolve => {
      (guard.canActivate(route, state) as Observable<boolean>)
        .pipe(take(1))
        .subscribe(bool => {
          expect(bool).toBeTruthy();
          resolve();
        });
    });
  }));
});
