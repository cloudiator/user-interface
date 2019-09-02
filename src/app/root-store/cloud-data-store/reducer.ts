import * as cloudActions from './actions';
import {initialState, State} from './state';

export function cloudDataReducer(state = initialState, action: cloudActions.All): State {
  switch (action.type) {
    case cloudActions.SET_CLOUDS:
      return {
        ...state,
        clouds: action.clouds
      };
    case cloudActions.SET_CLOUD_IS_LOADING:
      return {
        ...state,
        cloudIsLoading: action.isLoading
      };
    case cloudActions.SET_HARDWARE:
      return {
        ...state,
        hardware: action.hardware
      };
    case cloudActions.SET_HARDWARE_IS_LOADING:
      return {
        ...state,
        hardwareIsLoading: action.isLoading
      };
    case cloudActions.SET_IMAGES:
      return {
        ...state,
        images: action.images
      };
    case cloudActions.SET_IMAGE_IS_LOADING:
      return {
        ...state,
        imageIsLoading: action.isLoading
      };
    case cloudActions.SET_LOCATIONS:
      return {
        ...state,
        locations: action.locations
      };
    case cloudActions.SET_LOCATION_IS_LOADING:
      return {
        ...state,
        locationIsLoading: action.isLoading
      };
    default:
      return state;
  }
}
