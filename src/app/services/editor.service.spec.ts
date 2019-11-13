import {TestBed} from '@angular/core/testing';

import {EditorService} from './editor.service';
import {filter, take, tap, timeout} from 'rxjs/operators';
import {EditorActions, RootStoreModule} from '../root-store';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../app.module';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import * as testData from 'testing/test-data';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EditorStorageState} from '../model/EditorStorageState';
import {queue} from 'rxjs/internal/scheduler/queue';
import {of} from 'rxjs';

describe('EditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
      HttpClientTestingModule,
      ApiModule.forRoot(apiConfigFactory),
      AppDialogModule
    ]
  }));

  beforeEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    const service: EditorService = TestBed.get(EditorService);
    expect(service).toBeTruthy();
  });

  it('save state should be consistent', async () => {
    const service: EditorService = TestBed.get(EditorService);

    service.store.dispatch(new EditorActions.UploadFileAction('', 'unnamed.yaml'));

    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeFalsy());

    await service.setEditorValue('');
    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeFalsy());

    await service.setEditorValue('different value');
    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeTruthy());

    await service.store.dispatch(new EditorActions.ChangesSavedAction());
    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeFalsy());

    await service.setEditorValue('');
    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeTruthy());
  });

  it('uploadFile should reject on wrong arguments', async () => {
    const service: EditorService = TestBed.get(EditorService);

    await service.uploadFile(null)
      .then(() => fail('files == null should throw exception'))
      .catch(err => expect(err).toEqual('could not load file'));

    await service.uploadFile(<FileList>{length: 0})
      .then(() => fail('length == 0 should throw exception'))
      .catch(err => expect(err).toEqual('could not load file'));
  });

  it('editor state should be cached correctly', async () => {
    const service: EditorService = TestBed.get(EditorService);
    const filename = 'testname';

    return new Promise(async resolve => {
      expect(service.loadEditorState()).toEqual({
        editorValue: '',
        filename: 'unnamed.yaml',
        jobId: null,
        queueId: null
      });

      service.setEditorValue(testData.jobYaml);
      service.setFilename(filename);
      service.setEditorJob(testData.jobOne);
      service.setEditorQueue(testData.queueScheduled);

      const storedState = service.loadEditorState();

      expect(storedState.editorValue).toEqual(testData.jobYaml);
      expect(storedState.filename).toEqual(filename);
      expect(storedState.jobId).toEqual(testData.jobOne.id);
      expect(storedState.queueId).toEqual(testData.queueScheduled.id);

      resolve();
    });
  });

  it('editor state should be restored correctly from cache', async () => {
    const service: EditorService = TestBed.get(EditorService);
    const filename = 'testname';

    spyOn(service.jobDataService, 'findJob').and.callFake(jobId => {
      expect(jobId).toEqual(testData.jobOne.id);
      return of(testData.jobOne);
    });

    spyOn(service.queueDataService, 'findQueuedTask').and.callFake(queueId => {
      expect(queueId).toEqual(testData.queueScheduled.id);
      return of(testData.queueScheduled);
    });

    spyOn(service.jobDataService, 'jobGraph').and.returnValue(of({}));
    spyOn(service.queueDataService, 'listenToQueueTaskStatus').and.stub();

    return new Promise(async resolve => {

      const storedState = <EditorStorageState>{
        editorValue: testData.jobYaml,
        filename: filename,
        jobId: testData.jobOne.id,
        queueId: testData.queueCompleted.id
      };

      await service.composeStorageState(storedState);

      await service.getEditorValue()
        .pipe(take(1))
        .subscribe(
          val => expect(val).toEqual(testData.jobYaml),
          () => fail('getEditorValue should not fail'));

      await service.getFilename()
        .pipe(take(1))
        .subscribe(
          val => expect(val).toEqual(filename),
          () => fail('getFilename should not fail'));


      service.getEditorJob()
        .pipe(take(1))
        .subscribe(
          val => expect(val).toEqual(testData.jobOne),
          () => fail('getEditorJob should not fail'));

      await service.getEditorQueue()
        .pipe(take(1))
        .subscribe(
          val => expect(val).toEqual(testData.queueScheduled),
          () => fail('getEditorQueue should not fail')
        );

      expect(service.jobDataService.jobGraph).toHaveBeenCalledTimes(1);
      expect(service.queueDataService.listenToQueueTaskStatus).toHaveBeenCalledTimes(1);

      resolve();
    });
  });

  it('queue should not be restored if job isnt found', async () => {
    const service: EditorService = TestBed.get(EditorService);

    spyOn(service.jobDataService, 'findJob').and.callFake(jobId => {
      expect(jobId).toEqual(testData.jobOne.id);
      return of(testData.jobOne);
    });

    spyOn(service.queueDataService, 'findQueuedTask').and.returnValue(of(null));

    spyOn(service.jobDataService, 'jobGraph').and.returnValue(of({}));
    spyOn(service.queueDataService, 'listenToQueueTaskStatus').and.stub();

    return new Promise(async resolve => {

      const storedState = <EditorStorageState>{
        editorValue: '',
        filename: '',
        jobId: null,
        queueId: null
      };

      await service.composeStorageState(storedState);

      expect(service.jobDataService.findJob).not.toHaveBeenCalled();
      expect(service.queueDataService.findQueuedTask).not.toHaveBeenCalled();
      expect(service.queueDataService.listenToQueueTaskStatus).not.toHaveBeenCalled();

      resolve();
    });
  });
});
