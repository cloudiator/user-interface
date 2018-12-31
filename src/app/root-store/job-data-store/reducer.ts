import * as jobActions from './actions';
import {initialState, State} from './state';

export function jobDataReducer(state = initialState, action: jobActions.All): State {
  switch (action.type) {
    case jobActions.SET_JOBS:
      return {
        jobs: action.jobs,
        ...state
      };
    default:
      return state;
  }
}
