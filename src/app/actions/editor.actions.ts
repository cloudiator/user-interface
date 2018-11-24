import {Action} from '@ngrx/store';


export const SET_VALUE = '[Editor] set Value';
export const SET_FILENAME = '[Editor] set Filename';
export const SET_EDITOR_GRAPH = '[Editor] set editorGraph';
export const UPLOAD_FILE = '[Editor] upload File';
export const CHANGES_SAVED = '[Editor] changes saved';

export class SetValueAction implements Action {
  readonly type = SET_VALUE;

  constructor(public value: string) {
  }
}

export class SetFilenameAction implements Action {
  readonly type = SET_FILENAME;

  constructor(public filename: string) {
  }
}

export class SetEditorGraphAction implements Action {
  readonly type = SET_EDITOR_GRAPH;

  constructor(public editorGraph: any) {
  }
}

export class UploadFileAction implements Action {
  readonly type = UPLOAD_FILE;

  constructor(public value: string, public filename: string) {

  }
}

export class ChangesSavedAction implements Action {
  readonly type = CHANGES_SAVED;

  constructor() {
  }
}

export type All = SetValueAction | SetFilenameAction | SetEditorGraphAction | UploadFileAction | ChangesSavedAction;
