import {TestBed, async, inject} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {UserService} from 'cloudiator-rest-api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RootStoreModule} from '../root-store';
import {RouterTestingModule} from '@angular/router/testing';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';

describe('AuthGuard', () => {
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
        RootStoreModule,
        RouterTestingModule,
        AppDialogModule
      ],
      providers: [
        AuthGuard,
        UserService
      ]
    });
  });

  it('should create', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should should correctly reroute to login', inject([AuthGuard], (guard: AuthGuard) => {
    spyOn(guard.authService, 'isLoggedIn').and.returnValue(of(false));
    spyOn(guard.router, 'navigateByUrl').and.stub();
    const route = createMockRoute(null);
    const state = createMockRouteState();

    return new Promise(resolve => {
      (guard.canActivate(route, state) as Observable<boolean>)
        .pipe(take(1))
        .subscribe(bool => {
          expect(bool).toBeFalsy();
          expect(guard.router.navigateByUrl).toHaveBeenCalledWith('/login');
          resolve();
        });
    });
  }));

  it('should should not block authorized routing', inject([AuthGuard], (guard: AuthGuard) => {
    spyOn(guard.authService, 'isLoggedIn').and.returnValue(of(true));
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
