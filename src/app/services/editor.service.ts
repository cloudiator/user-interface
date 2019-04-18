import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import saveAs from 'file-saver';
import {Observable, Subscription} from 'rxjs';
import {filter, mergeMap, take} from 'rxjs/operators';
import {EditorActions, EditorSelectors, RootStoreState} from '../root-store';
import {JobDataService} from './job-data.service';
import {Job, Queue} from 'cloudiator-rest-api';
import {QueueDataService} from './queue-data.service';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(public store: Store<RootStoreState.State>,
              public jobDataService: JobDataService,
              public queueDataService: QueueDataService) {
  }

  public getEditorValue(): Observable<string> {
    return this.store.pipe(select(EditorSelectors.selectValue));
  }

  public setEditorValue(value: string) {
    this.store.dispatch(new EditorActions.SetValueAction(value));
  }

  public getFilename(): Observable<string> {
    return this.store.pipe(select(EditorSelectors.selectFilename));
  }

  public setFilename(filename: string) {
    this.store.dispatch(new EditorActions.SetFilenameAction(filename));
  }

  getEditorJob(): Observable<Job> {
    return this.store.pipe(select(EditorSelectors.selectJob));
  }

  setEditorJob(job: Job) {
    this.store.dispatch(new EditorActions.SetEditorJobAction(job));
  }

  getEditorQueue(): Observable<Queue> {
    return this.store.pipe(select(EditorSelectors.selectQueue));
  }

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

  public setEditorGraph(graphData: any | null) {
    this.store.dispatch(new EditorActions.SetEditorGraphAction(graphData));
  }

  public HasUnsaveChanges(): Observable<boolean> {
    return this.store.pipe(select(EditorSelectors.selectHasUnsavedChanges));
  }

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
}
