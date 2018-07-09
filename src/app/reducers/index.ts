import {ActionReducerMap, createSelector} from '@ngrx/store';

import * as fromUserSettings from './user-settings.reducer';

/* State */
export interface State {
  userSettings: fromUserSettings.State;
}

export const globalInitialState: State = {
  userSettings: fromUserSettings.initialState
};

/* Map of all Reducers */
export const reducers: ActionReducerMap<State> = {
  userSettings: fromUserSettings.reducer
};


/* States */
export const userSettingsState = (state: State): fromUserSettings.State => state.userSettings;

/* Selectors */

/* user settings */
export const getUserSettings = createSelector(userSettingsState, fromUserSettings.getUserSettings);

