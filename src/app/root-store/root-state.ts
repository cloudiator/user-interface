import {RuntimeConfigStoreState} from './runtime-config-store';
import {CloudDataStoreState} from './cloud-data-store';
import {EditorStoreState} from './editor-store';
import {JobDataStoreState} from './job-data-store';

export interface State {
  runtimeConfig: RuntimeConfigStoreState.State;
  cloudData: CloudDataStoreState.State;
  editor: EditorStoreState.State;
  jobData: JobDataStoreState.State;
}
