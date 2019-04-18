import {State} from './state';
import {Schedule} from 'cloudiator-rest-api';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

const getSchedules = (state: State): Schedule[] => state.schedules;

export const selectProcessDataState: MemoizedSelector<object, State>
  = createFeatureSelector<State>('processData');

export const selectSchedules: MemoizedSelector<object, Schedule[]>
  = createSelector(selectProcessDataState, getSchedules);
