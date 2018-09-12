import * as cloudActions from '../actions/cloud-data.actions';
import {Cloud, Hardware, Image} from 'cloudiator-rest-api';


export interface State {
  clouds: Cloud[];
  hardware: Hardware[];
  images: Image[];
}

export const initialState = {
  clouds: [],
  hardware: [],
  images: []
};

export function reducer(state = initialState, action: cloudActions.All): State {
  switch (action.type) {
    case cloudActions.SET_CLOUDS:
      return {...state, clouds: action.clouds};
    case cloudActions.SET_HARDWARE:
      return {...state, hardware: action.hardware};
    case cloudActions.SET_IMAGES:
      return {...state, images: action.images};
    default:
      return initialState;
  }
}

export const getClouds = (state: State): Cloud[] => state.clouds;
export const getHardware = (state: State): Hardware[] => state.hardware;
export const getImages = (state: State): Image[] => state.images;
