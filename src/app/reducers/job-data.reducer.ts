import * as jobActions from '../actions/job-data.actions';
import {Job} from 'cloudiator-rest-api';
import * as cloudActions from '../actions/cloud-data.actions';

export interface State {
  jobs: Job[];
}

export const initialState = {
  jobs: []
};


export function reducer(state = initialState, action: jobActions.All): State {
  switch (action.type) {
    case jobActions.SET_JOBS:
      return {jobs: action.jobs, ...state};
    default:
      return state;
  }
}

export const getJobs = (state: State): Job[] => state.jobs;
