import * as jobActions from '../../actions/job-data.actions';
import {initialState, State} from '../../reducers/job-data.reducer';

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
