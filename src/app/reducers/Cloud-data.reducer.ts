import * as cloudActions from '../actions/cloud-data.actions';
import {Cloud} from '..';


export interface State {
  clouds: Cloud[];
}

export const initialState = {
  clouds: []
};

export function reducer(state = initialState, action: cloudActions.All): State {
  switch (action.type) {
    case cloudActions.SET_CLOUDS:
      return {...state, clouds: action.clouds};
    default:
      return initialState;
  }
}

export const getClouds = (state: State): any => state.clouds;
