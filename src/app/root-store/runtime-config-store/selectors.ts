import {AuthMode, RuntimeConfig} from '../../model/RuntimeConfig';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {State} from './state';

const getApiPath = (state: State): string => state.runtimeConfig.apiPath;
const getXApiKey = (state: State): string => state.runtimeConfig.xApiKey;
const getAuthMode = (state: State): AuthMode => state.runtimeConfig.authMode;
const getRuntimeConfig = (state: State): RuntimeConfig => state.runtimeConfig;
const isFetched = (state: State): boolean => state.isFetched;


export const selectRuntimeConfigState: MemoizedSelector<object, State>
  = createFeatureSelector<State>('runtimeConfig');

export const selectApiPath: MemoizedSelector<object, string>
  = createSelector(selectRuntimeConfigState, getApiPath);
export const selectAuthMode: MemoizedSelector<object, AuthMode>
  = createSelector(selectRuntimeConfigState, getAuthMode);
export const selectXApiKey: MemoizedSelector<object, string>
  = createSelector(selectRuntimeConfigState, getXApiKey);
export const selectConfig: MemoizedSelector<object, RuntimeConfig>
  = createSelector(selectRuntimeConfigState, getRuntimeConfig);
export const selectIsFetched: MemoizedSelector<object, boolean>
  = createSelector(selectRuntimeConfigState, isFetched);
