import {State} from './state';
import {Schedule} from 'cloudiator-rest-api';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

const getSchedules = (state: State): Schedule[] => state.schedules;
const getScheduleIsLoading = (state: State): boolean => state.scheduleIsLoading;

export const selectProcessDataState: MemoizedSelector<object, State>
  = createFeatureSelector<State>('processData');

export const selectSchedules: MemoizedSelector<object, Schedule[]>
  = createSelector(selectProcessDataState, getSchedules);
export const selectScheduleIsLoading: MemoizedSelector<object, boolean>
  = createSelector(selectProcessDataState, getScheduleIsLoading);
