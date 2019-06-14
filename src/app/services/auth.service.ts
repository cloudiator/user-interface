import {Injectable} from '@angular/core';
import {Login, Token, UserService} from 'cloudiator-rest-api';
import {RuntimeConfigService} from './runtime-config.service';
import {select, Store} from '@ngrx/store';
import {AuthActions, AuthSelectors, RootStoreState} from '../root-store';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastService} from '../app-dialog/services/toast.service';
import {ToastType} from '../app-dialog/model/toast';
import {environment} from '../../environments/environment';

/**
 * handles requests concerning Authentication.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Key that is used to save the loginToken in the localStorage.
   * @type {string}
   */
  private readonly LOGIN_STORE_KEY = 'loginToken';

  /** @ignore */
  constructor(public userApiService: UserService,
              public runtimeConfigService: RuntimeConfigService,
              public router: Router,
              public store: Store<RootStoreState.State>,
              public toastService: ToastService) {
    // login The user with the given xApiKey if skipAuth is active.
    if (environment.skipAuth) {
      this.store.dispatch(new AuthActions.LogInAction({token: environment.xApiKey}));
    }
    // if token stored and not expired, push it into the store
    const storedLogin = this.loadLoginFromLocalStore();
    if (storedLogin) {
      if (storedLogin.expireTime || storedLogin.expireTime > Date.now()) {
        this.store.dispatch(new AuthActions.LogInAction(storedLogin));
      }
    }
  }

  /**
   * Returns an Observable containing the loggedIn State.
   * @return {Observable<boolean>}
   */
  public isLoggedIn(): Observable<boolean> {
    return this.store.pipe(select(AuthSelectors.selectLoggedIn));
  }

  /**
   * Send a new login request to the api, and handles possible errors.
   * the request is mapped to a boolean, saying yes if login is successfull or no if not.
   * if Login is Successfull the new login token is placed in the Redux store and saved to localstorage.
   * @param {Login} login
   * @return {Observable<boolean>}
   */
  public logIn(login: Login): Observable<boolean> {
    return this.userApiService.login(login).pipe(
      map(token => {
        this.store.dispatch(new AuthActions.LogInAction(token));
        this.saveLoginToLocalStore(token);
        return true;
      }),
      catchError(err => {
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

  /**
   * the Api does not have a logout option, so logout is achived by deleting the token from redux store and localStorage
   * and then navigating to the login view.
   */
  public logOut() {
    this.store.dispatch(new AuthActions.LogOutAction());
    this.clearStoredLogin();
    this.router.navigate(['/login']);
  }

  /**
   * Rrturns an Observable containing the current login token string.
    * @return {Observable<string>}
   */
  public getToken(): Observable<string> {
    return this.store.pipe(select(AuthSelectors.selectToken));
  }

  /**
   * retrieves Login Token from localStorage.
   * @return {Token}
   */
  private loadLoginFromLocalStore(): Token {
    return JSON.parse(localStorage.getItem(this.LOGIN_STORE_KEY));
  }

  /**
   * Saves Login token to localStorage.
   * @param {Token} token
   */
  private saveLoginToLocalStore(token: Token) {
    localStorage.setItem(this.LOGIN_STORE_KEY, JSON.stringify(token));
  }

  /**
   * deletes login token from localStorage.
   */
  private clearStoredLogin() {
    localStorage.removeItem(this.LOGIN_STORE_KEY);
  }
}


