import * as userSettingActions from '../actions/runtime-config.actions';
import {RuntimeConfig} from '../model/RuntimeConfig';

export interface State {
  runtimeConfig: RuntimeConfig;
}

export const initialState = {
  runtimeConfig: <RuntimeConfig>{
    apiPath: '',
    xApiKey: ''
  }
};

export function reducer(state = initialState, action: userSettingActions.All): State {
  console.log('in reducer', action, state);
  switch (action.type) {
    case userSettingActions.SET_API_PATH:
      return {runtimeConfig: {apiPath: action.apiPath, ...state.runtimeConfig}, ...state};
    case userSettingActions.SET_X_API_KEY:
      return {runtimeConfig: {xApiKey: action.xApiKey, ...state.runtimeConfig}, ...state};
    case userSettingActions.SET_RUNTIME_CONFIG:
      console.log('int set runtime config');
      return {runtimeConfig: action.config};
  }
}

export const getApiPath = (state: State): string => state.runtimeConfig.apiPath;
export const getXApiKey = (state: State): string => state.runtimeConfig.xApiKey;
export const getRuntimeConfig = (state: State): RuntimeConfig => state.runtimeConfig;
