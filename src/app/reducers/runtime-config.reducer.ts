import * as userSettingActions from '../actions/runtime-config.actions';
import {RuntimeConfig} from '../model/RuntimeConfig';

export interface State {
  runtimeConfig: RuntimeConfig;
  isFetched: boolean;
}

export const initialState = {
  runtimeConfig: <RuntimeConfig>{
    apiPath: '',
    xApiKey: ''
  },
  isFetched: false
};

export function reducer(state = initialState, action: userSettingActions.All): State {
  switch (action.type) {
    case userSettingActions.SET_API_PATH:
      return {runtimeConfig: {apiPath: action.apiPath, ...state.runtimeConfig}, ...state};
    case userSettingActions.SET_X_API_KEY:
      return {runtimeConfig: {xApiKey: action.xApiKey, ...state.runtimeConfig}, ...state};
    case userSettingActions.SET_RUNTIME_CONFIG:
      return {...state, runtimeConfig: action.config, isFetched: true};
    default:
      return state;
  }
}

export const getApiPath = (state: State): string => state.runtimeConfig.apiPath;
export const getXApiKey = (state: State): string => state.runtimeConfig.xApiKey;
export const getRuntimeConfig = (state: State): RuntimeConfig => state.runtimeConfig;
export const isFetched = (state: State): boolean => state.isFetched;
