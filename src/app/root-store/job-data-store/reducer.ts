import * as jobActions from './actions';
import {initialState, State} from './state';

export function jobDataReducer(state = initialState, action: jobActions.All): State {
  switch (action.type) {
    case jobActions.SET_JOBS:
      return {
        ...state,
        jobs: action.jobs
      };
    default:
      return state;
  }
}
