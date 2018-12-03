import {initialState, State} from './state';
import {Actions, ActionTypes} from './actions';

export function runtimeConfigReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SET_API_PATH:
      return {
        runtimeConfig: {
          apiPath: action.apiPath,
          ...state.runtimeConfig
        },
        ...state
      };
    case ActionTypes.SET_AUTH_MODE:
      return {
        runtimeConfig: {
          apiPath: action.authMode,
          ...state.runtimeConfig
        },
        ...state
      };
    case ActionTypes.SET_X_API_KEY:
      return {
        runtimeConfig: {
          xApiKey: action.xApiKey,
          ...state.runtimeConfig
        },
        ...state
      };
    case ActionTypes.SET_RUNTIME_CONFIG:
      return {
        ...state,
        runtimeConfig: action.config,
        isFetched: true
      };
    default:
      return state;
  }
}
