import * as editorActions from './actions';
import {initialState, State} from './state';

export function editorReducer(state = initialState, action: editorActions.All): State {
  switch (action.type) {
    case editorActions.SET_STATE:
      return action.state;
    case editorActions.SET_VALUE:
      return {...state, value: action.value, unsavedChanges: action.value !== state.originalValue};
    case editorActions.SET_FILENAME:
      return {...state, filename: action.filename};
    case editorActions.UPLOAD_FILE:
      return {...state, originalValue: action.value, value: action.value, filename: action.filename, unsavedChanges: false};
    case editorActions.CHANGES_SAVED:
      return {...state, unsavedChanges: false, originalValue: state.value};
    case editorActions.SET_EDITOR_GRAPH:
      return {...state, editorGraph: action.editorGraph};
    case editorActions.SET_EDITOR_JOB:
      return {...state, editorJob: action.editorJob};
    case editorActions.SET_EDITOR_QUEUE:
      return {...state, editorQueue: action.editorQueue};
  }
  return state;
}
