import * as cloudActions from '../actions/cloud-data.actions';
import {Cloud, Hardware} from 'cloudiator-rest-api';


export interface State {
  clouds: Cloud[];
  hardware: Hardware[];
}

export const initialState = {
  clouds: [],
  hardware: []
};

export function reducer(state = initialState, action: cloudActions.All): State {
  switch (action.type) {
    case cloudActions.SET_CLOUDS:
      return {...state, clouds: action.clouds};
    case cloudActions.SET_HARDWARE:
      return {...state, hardware: action.hardware};
    default:
      return initialState;
  }
}

export const getClouds = (state: State): Cloud[] => state.clouds;
export const getHardware = (state: State): Hardware[] => state.hardware;
