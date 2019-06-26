import {Action} from '@ngrx/store';
import {Schedule} from 'cloudiator-rest-api';

export const SET_SCHEDULES = '[Processdata] set schedules';
export const SET_SCHEDULE_IS_LOADING = '[Processdata] set Schedule is loading';

export class SetSchedulesAction implements Action {
  readonly type = SET_SCHEDULES;

  constructor(public  schedules: Schedule[]) {
  }
}

export class SetScheduleIsLoading implements Action {
  readonly type = SET_SCHEDULE_IS_LOADING;

  constructor(public isLoading: boolean) {
  }
}


export type All = SetSchedulesAction | SetScheduleIsLoading;
