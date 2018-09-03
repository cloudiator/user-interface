import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromUserSettings from './user-settings.reducer';
import * as fromCloudData from './cloud-data.reducer';
import * as fromRuntimeConfig from './runtime-config.reducer';

/* State */
export interface State {
  cloudData: fromCloudData.State;
  userSettings: fromUserSettings.State;
  runtimeConfig: fromRuntimeConfig.State;
}

export const globalInitialState: State = {
  cloudData: fromCloudData.initialState,
  userSettings: fromUserSettings.initialState,
  runtimeConfig: fromRuntimeConfig.initialState
};

/* Map of all Reducers */
export const reducers: ActionReducerMap<State> = {
  cloudData: fromCloudData.reducer,
  userSettings: fromUserSettings.reducer,
  runtimeConfig: fromRuntimeConfig.reducer
};


/* States */
export const cloudDataState = (state: State): fromCloudData.State => state.cloudData;
export const userSettingsState = (state: State): fromUserSettings.State => state.userSettings;
export const runtimeConfigState = (state: State): fromRuntimeConfig.State => state.runtimeConfig;

/* Selectors */

/* Cloud Data */
export const getClouds = createSelector(cloudDataState, fromCloudData.getClouds);

/* User Settings */
export const getUserSettings = createSelector(userSettingsState, fromUserSettings.getUserSettings);

/* Runtime Config */

export const getApiPath = createSelector(runtimeConfigState, fromRuntimeConfig.getApiPath);
export const getXApiKey = createSelector(runtimeConfigState, fromRuntimeConfig.getXApiKey);
export const getRuntimeConfig = createSelector(runtimeConfigState, fromRuntimeConfig.getRuntimeConfig);
export const getRuntimeConfigIsFetched = createSelector(runtimeConfigState, fromRuntimeConfig.isFetched);

