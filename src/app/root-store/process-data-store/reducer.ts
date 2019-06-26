import * as processActions from './actions';
import {initialState, State} from './state';

export function processDatareducer(state = initialState, action: processActions.All): State {
  switch (action.type) {
    case processActions.SET_SCHEDULES:
      return {
        ...state,
        schedules: action.schedules
      };
    case processActions.SET_SCHEDULE_IS_LOADING:
      return {
        ...state,
        scheduleIsLoading: action.isLoading
      };
    default:
      return state;
  }
}
