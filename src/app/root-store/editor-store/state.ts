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
