import {Cloud, Hardware, Image, Location} from 'cloudiator-rest-api';
import {State} from './state';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';


const getClouds = (state: State): Cloud[] => state.clouds;
const getCloudIsLoading = (state: State): boolean => state.cloudIsLoading;
const getHardware = (state: State): Hardware[] => state.hardware;
const getHardwareIsLoading = (state: State): boolean => state.hardwareIsLoading;
const getImages = (state: State): Image[] => state.images;
const getImageIsLoading = (state: State): boolean => state.imageIsLoading;
const getLocations = (state: State): Location[] => state.locations;
const getLocationIsLoading = (state: State): boolean => state.locationIsLoading;

export const selectCloudDataState: MemoizedSelector<object, State>
  = createFeatureSelector<State>('cloudData');

export const selectClouds: MemoizedSelector<object, Cloud[]>
  = createSelector(selectCloudDataState, getClouds);
export const selectCloudIsLoading: MemoizedSelector<object, boolean>
  = createSelector(selectCloudDataState, getCloudIsLoading);
export const selectHardware: MemoizedSelector<object, Hardware[]>
  = createSelector(selectCloudDataState, getHardware);
export const selectHardwareIsLoading: MemoizedSelector<object, boolean>
  = createSelector(selectCloudDataState, getHardwareIsLoading);
export const selectImages: MemoizedSelector<object, Image[]>
  = createSelector(selectCloudDataState, getImages);
export const selectImageIsLoading: MemoizedSelector<object, boolean>
  = createSelector(selectCloudDataState, getImageIsLoading);
export const selectLocations: MemoizedSelector<object, Location[]>
  = createSelector(selectCloudDataState, getLocations);
export const selectLocationIsLoading: MemoizedSelector<object, boolean>
  = createSelector(selectCloudDataState, getLocationIsLoading);
