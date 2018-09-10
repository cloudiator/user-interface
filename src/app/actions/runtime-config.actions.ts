import {Action} from '@ngrx/store';
import {RuntimeConfig} from '../model/RuntimeConfig';

export const SET_API_PATH = '[RuntimeConfig] set api path';
export const SET_X_API_KEY = '[RuntimeConfig] set x api key';
export const SET_RUNTIME_CONFIG = '[RuntimeConfig] set runtime config';

export class SetApiPathAction implements Action {
  readonly type = SET_API_PATH;

  constructor(public apiPath: string) {
  }
}

export class SetXApiKeyAction implements Action {
  readonly type = SET_X_API_KEY;

  constructor(public xApiKey: string) {
  }
}

export class SetRuntimeConfigAction implements Action {
  readonly type = SET_RUNTIME_CONFIG;

  constructor(public config: RuntimeConfig) {

  }
}


export type All = SetApiPathAction | SetXApiKeyAction | SetRuntimeConfigAction;
