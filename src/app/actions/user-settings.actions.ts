import {Action} from '@ngrx/store';

export const GET = '[UserSettings] get settings';
export const SET_SETTINGS = '[UserSettings] set settings';

export class GetUserSettingsAction implements Action {
  readonly type = GET;

  constructor() {
  }
}

export class SetUserSettingsAction implements Action {
  readonly type = SET_SETTINGS;

  constructor(public settings: any) {
  }
}


export type All = GetUserSettingsAction | SetUserSettingsAction;
