import * as cloudActions from '../actions/cloud-data.actions';
import {Cloud, Hardware, Image, Location} from 'cloudiator-rest-api';


export interface State {
  clouds: Cloud[];
  hardware: Hardware[];
  images: Image[];
  locations: Location[];
}

export const initialState = {
  clouds: [],
  hardware: [],
  images: [],
  locations: []
};

export function reducer(state = initialState, action: cloudActions.All): State {
  switch (action.type) {
    case cloudActions.SET_CLOUDS:
      return {...state, clouds: action.clouds};
    case cloudActions.SET_HARDWARE:
      return {...state, hardware: action.hardware};
    case cloudActions.SET_IMAGES:
      return {...state, images: action.images};
    case cloudActions.SET_LOCATIONS:
      return {...state, locations: action.locations};
    default:
      return initialState;
  }
}

export const getClouds = (state: State): Cloud[] => state.clouds;
export const getHardware = (state: State): Hardware[] => state.hardware;
export const getImages = (state: State): Image[] => state.images;
export const getLocations = (state: State): Location[] => state.locations;
