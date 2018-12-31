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
