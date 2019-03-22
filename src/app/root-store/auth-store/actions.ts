import {Action} from '@ngrx/store';
import {Login, LoginCredential, Token} from 'cloudiator-rest-api';

export const LOG_IN = '[Auth] Log In';
export const LOG_OUT = '[Auth] Log Out';

export class LogInAction implements Action {
  readonly type = LOG_IN;

  constructor(public token: Token) {
  }
}

export class LogOutAction implements Action {
  readonly type = LOG_OUT;

  constructor() {
  }
}

export type All = LogInAction | LogOutAction;
