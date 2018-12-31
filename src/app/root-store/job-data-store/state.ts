import {Job} from 'cloudiator-rest-api';

export interface State {
  jobs: Job[];
}

export const initialState = {
  jobs: []
};
