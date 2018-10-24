import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromUserSettings from './user-settings.reducer';
import * as fromCloudData from './cloud-data.reducer';
import * as fromEditor from './editor.reducer';
import * as fromRuntimeConfig from './runtime-config.reducer';

/* State */
export interface State {
  cloudData: fromCloudData.State;
  editor: fromEditor.State;
  userSettings: fromUserSettings.State;
  runtimeConfig: fromRuntimeConfig.State;
}

export const globalInitialState: State = {
  cloudData: fromCloudData.initialState,
  editor: fromEditor.initialState,
  userSettings: fromUserSettings.initialState,
  runtimeConfig: fromRuntimeConfig.initialState
};

/* Map of all Reducers */
export const reducers: ActionReducerMap<State> = {
  cloudData: fromCloudData.reducer,
  editor: fromEditor.reducer,
  userSettings: fromUserSettings.reducer,
  runtimeConfig: fromRuntimeConfig.reducer
};


/* States */
export const cloudDataState = (state: State): fromCloudData.State => state.cloudData;
export const editorState = (state: State): fromEditor.State => state.editor;
export const userSettingsState = (state: State): fromUserSettings.State => state.userSettings;
export const runtimeConfigState = (state: State): fromRuntimeConfig.State => state.runtimeConfig;

/* Selectors */

/* Cloud Data */
export const getClouds = createSelector(cloudDataState, fromCloudData.getClouds);
export const getHardware = createSelector(cloudDataState, fromCloudData.getHardware);
export const getImages = createSelector(cloudDataState, fromCloudData.getImages);
export const getLocations = createSelector(cloudDataState, fromCloudData.getLocations);

/* Editor */
export const getEditorValue = createSelector(editorState, fromEditor.getValue);
export const getEditorFilename = createSelector(editorState, fromEditor.getFilename);
export const editorHasUnsavedChanges = createSelector(editorState, fromEditor.hasUnsavedChanges);

/* User Settings */
export const getUserSettings = createSelector(userSettingsState, fromUserSettings.getUserSettings);

/* Runtime Config */

export const getApiPath = createSelector(runtimeConfigState, fromRuntimeConfig.getApiPath);
export const getAuthMode = createSelector(runtimeConfigState, fromRuntimeConfig.getAuthMode);
export const getXApiKey = createSelector(runtimeConfigState, fromRuntimeConfig.getXApiKey);
export const getRuntimeConfig = createSelector(runtimeConfigState, fromRuntimeConfig.getRuntimeConfig);
export const getRuntimeConfigIsFetched = createSelector(runtimeConfigState, fromRuntimeConfig.isFetched);

