import * as cloudActions from './actions';
import {initialState, State} from './state';

export function cloudDataReducer(state = initialState, action: cloudActions.All): State {
  switch (action.type) {
    case cloudActions.SET_CLOUDS:
      return {
        ...state,
        clouds: action.clouds
      };
    case cloudActions.SET_HARDWARE:
      return {
        ...state,
        hardware: action.hardware
      };
    case cloudActions.SET_IMAGES:
      return {
        ...state,
        images: action.images
      };
    case cloudActions.SET_LOCATIONS:
      return {
        ...state,
        locations: action.locations
      };
    default:
      return initialState;
  }
}
