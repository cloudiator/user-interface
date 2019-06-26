import {Schedule} from 'cloudiator-rest-api';

export interface State {
  schedules: Schedule[];
  scheduleIsLoading: boolean;
}

export const initialState = {
  schedules: [],
  scheduleIsLoading: false
};
