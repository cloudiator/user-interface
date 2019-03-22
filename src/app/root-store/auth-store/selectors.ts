import {State} from './state';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';


const getToken = (state: State): string => state.token;
const getUser = (state: State): string => state.user;
const loggedIn = (state: State): boolean => state.loggedIn;

export const selectAuthState: MemoizedSelector<object, State>
  = createFeatureSelector<State>('auth');

export const selectToken: MemoizedSelector<object, string>
  = createSelector(selectAuthState, getToken);
export const selectUser: MemoizedSelector<object, string>
  = createSelector(selectAuthState, getUser);
export const selectLoggedIn: MemoizedSelector<object, boolean>
  = createSelector(selectAuthState, loggedIn);
