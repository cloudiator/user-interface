import {Cloud, Hardware, Image, Location} from 'cloudiator-rest-api';

export interface State {
  clouds: Cloud[];
  cloudIsLoading: boolean;
  hardware: Hardware[];
  hardwareIsLoading: boolean;
  images: Image[];
  imageIsLoading: boolean;
  locations: Location[];
  locationIsLoading: boolean;
}

export const initialState: State = {
  clouds: [],
  cloudIsLoading: false,
  hardware: [],
  hardwareIsLoading: false,
  images: [],
  imageIsLoading: false,
  locations: [],
  locationIsLoading: false
};
