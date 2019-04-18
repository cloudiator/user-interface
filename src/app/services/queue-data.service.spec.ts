import {inject, TestBed} from '@angular/core/testing';

import {QueueDataService} from './queue-data.service';
import {EditorSelectors, RootStoreModule} from '../root-store';
import {ApiModule, Queue} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {apiConfigFactory} from '../app.module';
import {of} from 'rxjs';
import * as testData from '../../../testing/test-data';
import {select} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {resolveAfter3Seconds} from '../../../testing/test.util';
import {AppDialogModule} from '../app-dialog/app-dialog.module';

describe('QueueDataService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
      ApiModule.forRoot(apiConfigFactory),
      HttpClientModule,
      AppDialogModule],
    providers: [
      QueueDataService
    ]
  }));

  it('should be created', () => {
    const service: QueueDataService = TestBed.get(QueueDataService);
    expect(service).toBeTruthy();
  });

  describe('async timeout test', () => {
    let originalTimeout;


    beforeEach(function () {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it('listenToQueueTaskStatus should terminate correctly', inject([QueueDataService], async (service: QueueDataService) => {

      const findQueueSpy = spyOn(service.queueApiService, 'findQueuedTask')
        .and.returnValues(of(testData.queueRunning), of(testData.queueCompleted));

      service.listenToQueueTaskStatus(testData.job.id);
      await resolveAfter3Seconds().then(() => {
        expect(service.queueApiService.findQueuedTask).toHaveBeenCalledTimes(2);
      });
      service.store.pipe(
        select(EditorSelectors.selectQueue),
        take(1)
      ).subscribe((queue: Queue) => {
        expect(queue.status).toEqual('COMPLETED');
      });


      findQueueSpy.and.returnValues(of(testData.queueRunning), of(testData.queueFailed), of(testData.queueFailed));
      service.listenToQueueTaskStatus(testData.job.id);
      await resolveAfter3Seconds().then(() => {
        expect(service.queueApiService.findQueuedTask).toHaveBeenCalledTimes(4);
      });
      service.store.pipe(
        select(EditorSelectors.selectQueue),
        take(1)
      ).subscribe((queue: Queue) => {
        expect(queue.status).toEqual('FAILED');
      });
    }));

    it('listenToQueueTaskStatus should not terminate', inject([QueueDataService], async (service: QueueDataService) => {
      spyOn(service.queueApiService, 'findQueuedTask').and.returnValue(of(testData.queueRunning));

      service.listenToQueueTaskStatus(testData.job.id);
      await resolveAfter3Seconds().then(() => {
        service.store.pipe(
          select(EditorSelectors.selectQueue),
          take(1)
        ).subscribe((queue: Queue) => {
          expect(queue.status).toEqual('RUNNING');
        });
      });
    }));

    afterEach(() => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  });
});
