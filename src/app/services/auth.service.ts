import {Injectable} from '@angular/core';
import {Login, Token, UserService} from 'cloudiator-rest-api';
import {RuntimeConfigService} from './runtime-config.service';
import {select, Store} from '@ngrx/store';
import {AuthActions, AuthSelectors, RootStoreState} from '../root-store';
import {Observable, of} from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastService} from '../app-dialog/services/toast.service';
import {ToastType} from '../app-dialog/model/toast';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly LOGIN_STORE_KEY = 'loginToken';

  constructor(private userApiService: UserService,
              private runtimeConfigService: RuntimeConfigService,
              private router: Router,
              private store: Store<RootStoreState.State>,
              private toastService: ToastService) {
    if (environment.skipAuth) {
      this.store.dispatch(new AuthActions.LogInAction({token: environment.xApiKey}));
    }
    // if token stored and not expired, push it into the store
    const storedLogin = this.loadLoginFromLocalStore();
    if (storedLogin) {
      if (storedLogin.expireTime > Date.now()) {
        this.store.dispatch(new AuthActions.LogInAction(storedLogin));
      }
    }
  }

  public isLoggedIn(): Observable<boolean> {
    return this.store.pipe(select(AuthSelectors.selectLoggedIn));
  }

  /**
   *
   * @param {Login} login
   * @return {Observable<boolean>}
   */
  public logIn(login: Login): Observable<boolean> {
    return this.userApiService.login(login).pipe(
      take(1),
      map(token => {
        console.log('login success, new token:', token);
        this.store.dispatch(new AuthActions.LogInAction(token));
        this.saveLoginToLocalStore(token);
        return true;
      }),
      catchError(err => {
        console.log(err);
        switch (err.error.status) {
          case 400:
            this.toastService.show({text: err.error.message, type: ToastType.DANGER});
            break;
          case 401:
            this.toastService.show({text: err.error.message, type: ToastType.DANGER});
            break;
          case 500:
            this.toastService.show({text: 'Internal Server Error', type: ToastType.DANGER});
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
    this.clearStoredLogin();
    this.router.navigate(['/login']);
  }

  public getToken(): Observable<string> {
    return this.store.pipe(select(AuthSelectors.selectToken));
  }

  private loadLoginFromLocalStore(): Token {
    return JSON.parse(localStorage.getItem(this.LOGIN_STORE_KEY));
  }

  private saveLoginToLocalStore(token: Token) {
    localStorage.setItem(this.LOGIN_STORE_KEY, JSON.stringify(token));
  }

  private clearStoredLogin() {
    localStorage.removeItem(this.LOGIN_STORE_KEY);
  }
}


