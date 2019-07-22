import {Injectable, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import saveAs from 'file-saver';
import {Observable, zip} from 'rxjs';
import {filter, mergeMap, take, tap} from 'rxjs/operators';
import {EditorActions, EditorSelectors, RootStoreState} from '../root-store';
import {JobDataService} from './job-data.service';
import {Job, Queue} from 'cloudiator-rest-api';
import {QueueDataService} from './queue-data.service';
import {EditorStorageState} from '../model/EditorStorageState';

/**
 * Service handling all Functionality of the Editor View.
 */
@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private readonly EDITOR_STORE_KEY = 'editor';

  /** @ignore */
  constructor(public store: Store<RootStoreState.State>,
              public jobDataService: JobDataService,
              public queueDataService: QueueDataService) {
    const storedState = this.loadEditorState();
    if (storedState) {
      this.composeStorageState(storedState);
    }

    this.store.pipe(select(EditorSelectors.selectStorageState)).subscribe(val => {
      this.saveEditorState(val);
    });
  }

  /**
   * returns redux store Observable of current Editor Content.
   * @return {Observable<string>}
   */
  public getEditorValue(): Observable<string> {
    return this.store.pipe(select(EditorSelectors.selectValue));
  }

  /**
   * dispatches new Editor value to redux store.
   * @param {string} value
   */
  public setEditorValue(value: string) {
    this.store.dispatch(new EditorActions.SetValueAction(value));
  }

  /**
   * Returns redux store Observable of te editors current filename.
   * @return {Observable<string>}
   */
  public getFilename(): Observable<string> {
    return this.store.pipe(select(EditorSelectors.selectFilename));
  }

  /**
   * Dispatches new editor filename to store.
   * @param {string} filename
   */
  public setFilename(filename: string) {
    this.store.dispatch(new EditorActions.SetFilenameAction(filename));
  }

  /**
   * Returns redux store Observable of the current Job displayed.
   * @return {Observable<Job>}
   */
  getEditorJob(): Observable<Job> {
    return this.store.pipe(select(EditorSelectors.selectJob));
  }

  /**
   * Sets redux store value of current Editor Job.
   * @param {Job} job
   */
  setEditorJob(job: Job) {
    this.store.dispatch(new EditorActions.SetEditorJobAction(job));
  }

  /**
   * Returns current Queue Object of The Editor from Redux Store.
   * @return {Observable<Queue>}
   */
  getEditorQueue(): Observable<Queue> {
    return this.store.pipe(select(EditorSelectors.selectQueue));
  }

  /**
   * Updates store Object of the current Editor queue.
   * @param {Queue} queue
   */
  setEditorQueue(queue: Queue) {
    if (queue) {
      this.queueDataService.listenToQueueTaskStatus(queue.id);
    }
    this.store.dispatch(new EditorActions.SetEditorQueueAction(queue));
  }

  /**
   * Queies the Graph for the Editor's Job, and filters the request if the job is null right now.
   */
  public getEditorGraph(): Observable<any> {
    return this.store.pipe(select(EditorSelectors.selectJob)).pipe(
      filter(job => !!job),
      mergeMap(job => this.jobDataService.jobGraph(job.id))
    );
  }

  /**
   * sets current editor job graph in Store.
   * @param {any | null} graphData
   */
  public setEditorGraph(graphData: any | null) {
    this.store.dispatch(new EditorActions.SetEditorGraphAction(graphData));
  }

  /**
   * Redux store flag if Data is currently saved.
   * @return {Observable<boolean>}
   * @constructor
   */
  public HasUnsaveChanges(): Observable<boolean> {
    return this.store.pipe(select(EditorSelectors.selectHasUnsavedChanges));
  }

  /**
   * saves the current editor conent the local maschine.
   */
  public downloadFile() {
    // toDo: error handling
    this.store.pipe(
      select(EditorSelectors.selectEditorState),
      take(1))
      .subscribe(state => {
        const blob = new Blob([state.value], {
          type: 'text/plain;charset=utf-8'
        });

        saveAs(blob, state.filename);
        this.store.dispatch(new EditorActions.ChangesSavedAction());
      });
  }

  /**
   * loads the selected file into the editor.
   * @param {FileList} files
   * @return {Promise<any>}
   */
  public uploadFile(files: FileList): Promise<any> {
    if (files instanceof FileList && files.length > 0) {
      const reader = new FileReader();
      const file = files[0];
      reader.readAsBinaryString(file);
      return new Promise(resolve => {
        reader.onload = () => {
          this.store.dispatch(new EditorActions.UploadFileAction(reader.result.toString(), file.name));
          resolve();
        };
      });
    }
    return Promise.reject('could not load file');
  }

  /**
   * Composes needed information to save the editor state from the localStorage into the redux store.
   * This includes fetching job and queue if existing.
   * @param {EditorStorageState} storedState
   */
  public composeStorageState(storedState: EditorStorageState) {
    this.store.dispatch(new EditorActions.UploadFileAction(
      storedState.editorValue,
      storedState.filename
    ));
    // fetch job if existing
    if (storedState.JobId) {
      this.jobDataService.findJob(storedState.JobId)
        .pipe(filter(v => v !== undefined),
          take(1))
        .subscribe(job => {
            this.store.dispatch(new EditorActions.SetEditorJobAction(job));
            // fetch job graph if job was found
            this.jobDataService.jobGraph(job.id)
              .subscribe(graph =>
                this.store.dispatch(new EditorActions.SetEditorGraphAction(graph)));
          }
        );
    }
    // fetch queue
    if (storedState.queueId) {
      this.queueDataService.findQueuedTask(storedState.queueId)
        .subscribe(queue =>
          this.store.dispatch(new EditorActions.SetEditorQueueAction(queue))
        );
    }
  }

  private saveEditorState(state: EditorStorageState) {
    localStorage.setItem(this.EDITOR_STORE_KEY, JSON.stringify(state));
  }

  private loadEditorState(): EditorStorageState {
    const parsed: EditorStorageState = JSON.parse(localStorage.getItem(this.EDITOR_STORE_KEY));
    return parsed ?
      <EditorStorageState>{
        editorValue: parsed.editorValue ? parsed.editorValue : '',
        filename: parsed.filename ? parsed.filename : 'unnamed.yaml',
        JobId: parsed.JobId ? parsed.JobId : null,
        queueId: parsed.queueId ? parsed.queueId : null
      } : null;
  }

  private removeEditorState() {
    localStorage.removeItem(this.EDITOR_STORE_KEY);
  }
}
