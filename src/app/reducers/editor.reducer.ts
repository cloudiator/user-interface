import * as editorActions from '../actions/editor.actions';


export interface State {
  originalValue: string;
  value: string;
  filename: string;
  unsavedChanges: boolean;
  editorGraph: any | null;
}

export const initialState = {
  originalValue: '',
  value: '',
  filename: 'unnamed.yaml',
  unsavedChanges: false,
  editorGraph: null
};

export function reducer(state = initialState, action: editorActions.All): State {
  switch (action.type) {
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
  }
  return state;
}

export const getValue = (state: State): string => state.value;
export const getFilename = (state: State): string => state.filename;
export const hasUnsavedChanges = (state: State): boolean => state.unsavedChanges;
export const getEditorGraph = (state: State): boolean => state.editorGraph;