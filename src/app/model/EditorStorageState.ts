/**
 * Model Describing the Local storage content of the Editor.
 */
export interface EditorStorageState {
  /**
   * File shown in the Editor
   */
  editorValue: string;
  /**
   * name of file shown in Editor
   */
  filename: string;
  /**
   * Id of the Job shown in the Editor view;
   */
  jobId: string;
  /**
   * id of the Queue shown in the Editor view
   */
  queueId: string;
}
