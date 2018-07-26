import {Action} from '@ngrx/store';
import {Cloud} from '..';

export const SET_CLOUDS = '[Clouddata] set settings';

export class SetCloudsAction implements Action {
  readonly type = SET_CLOUDS;

  constructor(public clouds: Cloud[]) {
  }
}


export type All = SetCloudsAction;
