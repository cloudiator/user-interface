import {Cloud, Hardware, Image, Location} from 'cloudiator-rest-api';
import {State} from './state';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';


const getClouds = (state: State): Cloud[] => state.clouds;
const getHardware = (state: State): Hardware[] => state.hardware;
const getImages = (state: State): Image[] => state.images;
const getLocations = (state: State): Location[] => state.locations;

export const selectCloudDataState: MemoizedSelector<object, State>
  = createFeatureSelector<State>('cloudData');

export const selectClouds: MemoizedSelector<object, Cloud[]>
  = createSelector(selectCloudDataState, getClouds);
export const selectHardware: MemoizedSelector<object, Hardware[]>
  = createSelector(selectCloudDataState, getHardware);
export const selectImages: MemoizedSelector<object, Image[]>
  = createSelector(selectCloudDataState, getImages);
export const selectLocations: MemoizedSelector<object, Location[]>
  = createSelector(selectCloudDataState, getLocations);
