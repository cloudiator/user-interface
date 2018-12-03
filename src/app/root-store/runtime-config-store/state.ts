import {AuthMode, RuntimeConfig} from '../../model/RuntimeConfig';

export interface State {
  runtimeConfig: RuntimeConfig;
  isFetched: boolean;
}

export const initialState = {
  runtimeConfig: <RuntimeConfig>{
    apiPath: '',
    authMode: AuthMode.SINGLE,
    xApiKey: ''
  },
  isFetched: false
};
