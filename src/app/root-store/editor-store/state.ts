import {Job, Queue} from 'cloudiator-rest-api';

export interface State {
  originalValue: string;
  value: string;
  filename: string;
  unsavedChanges: boolean;
  editorGraph: any | null;
  editorJob: Job | null;
  editorQueue: Queue | null;
}

export const initialState = {
  originalValue: '',
  value: '',
  filename: 'unnamed.yaml',
  unsavedChanges: false,
  editorGraph: null,
  editorJob: null,
  editorQueue: null
};
