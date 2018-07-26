import {ActionReducerMap, createSelector} from '@ngrx/store';

import * as fromUserSettings from './user-settings.reducer';
import * as fromCloudData from './Cloud-data.reducer';

/* State */
export interface State {
  cloudData: fromCloudData.State;
  userSettings: fromUserSettings.State;
}

export const globalInitialState: State = {
  cloudData: fromCloudData.initialState,
  userSettings: fromUserSettings.initialState
};

/* Map of all Reducers */
export const reducers: ActionReducerMap<State> = {
  cloudData: fromCloudData.reducer,
  userSettings: fromUserSettings.reducer
};


/* States */
export const cloudDataState = (state: State): fromCloudData.State => state.cloudData;
export const userSettingsState = (state: State): fromUserSettings.State => state.userSettings;

/* Selectors */

/* Cloud Data */
export const getClouds = createSelector(cloudDataState, fromCloudData.getClouds);

/* User Settings */
export const getUserSettings = createSelector(userSettingsState, fromUserSettings.getUserSettings);

