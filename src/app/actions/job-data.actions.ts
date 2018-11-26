import {Job} from 'cloudiator-rest-api';
import {Action} from '@ngrx/store';


export const SET_JOBS = '[Jobdata] set jobs';

export class SetJobsActiom implements Action {
  readonly type = SET_JOBS;

  constructor(public jobs: Job[]) {
  }
}


export type All = SetJobsActiom;
