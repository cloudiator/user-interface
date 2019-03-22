import {Injectable} from '@angular/core';
import {Login, UserService} from 'cloudiator-rest-api';
import {RuntimeConfigService} from './runtime-config.service';
import {select, Store} from '@ngrx/store';
import {AuthActions, AuthSelectors, RootStoreState} from '../root-store';
import {Observable, of} from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastService} from '../app-dialog/services/toast.service';
import {ToastType} from '../model/toast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userApiService: UserService,
              private runtimeConfigService: RuntimeConfigService,
              private router: Router,
              private store: Store<RootStoreState.State>,
              private toastService: ToastService) {
  }

  public isLoggedIn(): Observable<boolean> {
    return this.store.pipe(select(AuthSelectors.selectLoggedIn));
  }

  public logIn(login: Login): Observable<boolean> {
    return this.userApiService.login(login).pipe(
      take(1),
      map(token => {
        console.log('login success, new token:', token);
        this.store.dispatch(new AuthActions.LogInAction(token));
        return true;
      }),
      catchError(err => {
        console.log(err);
        switch (err.error.code) {
          case 400:
            this.toastService.show({text: err.error.message, type: ToastType.DANGER});
            break;
          case 401:
            this.toastService.show({text: err.error.message, type: ToastType.DANGER});
            break;
          default:
            console.error(err);
        }
        return of(false);
      })
    );
  }

  public logOut() {
    this.store.dispatch(new AuthActions.LogOutAction());
    this.router.navigate(['/login']);
  }

  public getToken(): Observable<string> {
    return this.store.pipe(select(AuthSelectors.selectToken));
  }
}
