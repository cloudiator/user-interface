import {initialState, State} from './state';
import * as authActions from './actions';


export function authReducer(state = initialState, action: authActions.All): State {
  switch (action.type) {
    case authActions.LOG_IN:
      return {
        ...state,
        loggedIn: true,
        token: action.token.token,
        user: action.token.owner
      };
    case authActions.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
