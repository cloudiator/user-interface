import {Schedule} from 'cloudiator-rest-api';

export interface State {
  schedules: Schedule[];
}

export const initialState = {
  schedules: []
};
