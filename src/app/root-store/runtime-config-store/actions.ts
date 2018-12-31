import {Action} from '@ngrx/store';
import {AuthMode, RuntimeConfig} from '../../model/RuntimeConfig';

export enum ActionTypes {
  SET_API_PATH = '[RuntimeConfig] set api path',
  SET_AUTH_MODE = '[RuntimeConfig] set auth mode',
  SET_X_API_KEY = '[RuntimeConfig] set x api key',
  SET_RUNTIME_CONFIG = '[RuntimeConfig] set runtime config'
}

export class SetApiPathAction implements Action {
  readonly type = ActionTypes.SET_API_PATH;

  constructor(public apiPath: string) {
  }
}

export class SetAuthModeAction implements Action {
  readonly type = ActionTypes.SET_AUTH_MODE;

  constructor(public authMode: AuthMode) {
  }
}

export class SetXApiKeyAction implements Action {
  readonly type = ActionTypes.SET_X_API_KEY;

  constructor(public xApiKey: string) {
  }
}

export class SetRuntimeConfigAction implements Action {
  readonly type = ActionTypes.SET_RUNTIME_CONFIG;

  constructor(public config: RuntimeConfig) {
  }
}


export type Actions = SetApiPathAction | SetAuthModeAction | SetXApiKeyAction | SetRuntimeConfigAction;
