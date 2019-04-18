import {Action} from '@ngrx/store';
import {Schedule} from 'cloudiator-rest-api';

export const SET_SCHEDULES = '[Processdata] set schedules';

export class SetSchedulesAction implements Action {
  readonly type = SET_SCHEDULES;

  constructor(public  schedules: Schedule[]) {
  }
}


export type All = SetSchedulesAction;
