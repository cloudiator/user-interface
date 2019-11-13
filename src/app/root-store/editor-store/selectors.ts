import {State} from './state';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {EditorStorageState} from '../../model/EditorStorageState';

const getStorageState = (state: State): EditorStorageState => {
  return {
    editorValue: state.value,
    filename: state.filename,
    jobId: state.editorJob ? state.editorJob.id : undefined,
    queueId: state.editorQueue ? state.editorQueue.id : undefined
  };
};
const getValue = (state: State): string => state.value;
const getFilename = (state: State): string => state.filename;
const hasUnsavedChanges = (state: State): boolean => state.unsavedChanges;
const getEditorGraph = (state: State): any | null => state.editorGraph;
const getEditorJob = (state: State): any | null => state.editorJob;
const getEditorQueue = (state: State): any | null => state.editorQueue;

export const selectEditorState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('editor');

export const selectStorageState: MemoizedSelector<object, EditorStorageState> =
  createSelector(selectEditorState, getStorageState);
export const selectValue: MemoizedSelector<object, string>
  = createSelector(selectEditorState, getValue);
export const selectFilename: MemoizedSelector<object, string>
  = createSelector(selectEditorState, getFilename);
export const selectHasUnsavedChanges: MemoizedSelector<object, boolean>
  = createSelector(selectEditorState, hasUnsavedChanges);
export const selectGraph: MemoizedSelector<object, any | null>
  = createSelector(selectEditorState, getEditorGraph);
export const selectJob: MemoizedSelector<object, any | null>
  = createSelector(selectEditorState, getEditorJob);
export const selectQueue: MemoizedSelector<object, any | null>
  = createSelector(selectEditorState, getEditorQueue);

