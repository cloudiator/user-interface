import * as userSettingActions from '../actions/user-settings.actions';


export interface State {
  placeholder: any;
}

export const initialState = {
  placeholder: {}
};

export function reducer(state = initialState, action: userSettingActions.All): State {
  switch (action.type) {
    case userSettingActions.SET_SETTINGS:
      return {...initialState, ...state};
  }
}

export const getUserSettings = (state: State): any => state.placeholder;
