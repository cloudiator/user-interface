import {Job} from 'cloudiator-rest-api';
import {State} from './state';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

const getJobs = (state: State): Job[] => state.jobs;

export const selectJobDataStore: MemoizedSelector<object, State>
 = createFeatureSelector<State>('jobData');


export const selectJobs: MemoizedSelector<object, Job[]>
  = createSelector(selectJobDataStore, getJobs);
