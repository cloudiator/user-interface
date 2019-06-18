import {inject, TestBed} from '@angular/core/testing';

import {ProcessDataService} from './process-data.service';
import {RootStoreModule, RootStoreState} from '../root-store';
import {ApiModule} from 'cloudiator-rest-api';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import * as testData from 'testing/test-data';
import {RuntimeConfigService} from './runtime-config.service';
import {MockRuntimeConfigService} from '../../../testing/test.util';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {ToastService} from '../app-dialog/services/toast.service';

describe('ProcessDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
      HttpClientTestingModule,
      ApiModule.forRoot(testData.testApiFactory),
      AppDialogModule
    ],
    providers: [
      {
        provide: RuntimeConfigService,
        useClass: MockRuntimeConfigService
      }
    ]
  }));

  it('should be created', () => {
    const service: ProcessDataService = TestBed.get(ProcessDataService);
    expect(service).toBeTruthy();
  });

  it('schould fetch schedules', inject(
    [ProcessDataService, Store, HttpTestingController],
    (service: ProcessDataService, store: Store<RootStoreState.State>, httpMock: HttpTestingController) => {
      const apiPath = testData.testApiFactory().basePath;

      spyOn(store, 'pipe').and.returnValue(of([]));

      return new Promise(async resolve => {
        await service.getSchedules().subscribe();

        const req = httpMock.expectOne(`${apiPath}/schedule`);
        req.flush(testData.allSchedules);

        expect(store.pipe).toHaveBeenCalled();

        httpMock.verify();
        resolve();
      });
    }));

  it('should error on fetch', inject(
    [ProcessDataService, ToastService, HttpTestingController],
    (service: ProcessDataService, toastService: ToastService, httpMock: HttpTestingController) => {
      const apiPath = testData.testApiFactory().basePath;

      spyOn(toastService, 'show').and.stub();

      return new Promise(async resolve => {
        await service.getSchedules().subscribe();

        const req = httpMock.expectOne(`${apiPath}/schedule`);
        await req.error(new ErrorEvent('test error', {message: 'test error'}));

        expect(toastService.show).toHaveBeenCalled();
        httpMock.verify();
        resolve();
      });
    }
  ));

  it('should return ScheduleGraph', inject(
    [ProcessDataService, HttpTestingController],
    (service: ProcessDataService, httpMock: HttpTestingController) => {
      const apiPath = testData.testApiFactory().basePath;
      const schedule = testData.scheduleOne;
      const graph = testData.SchedulesGraph;

      return new Promise(async resolve => {
        await service.scheduleGraph(schedule.id).subscribe(
          res => {
            expect(res).toEqual({
              edges: graph.edges,
              nodes: graph.processes
            });

            resolve();
          }
        );

        const req = httpMock.expectOne(`${apiPath}/schedule/${schedule.id}/graph`);
        req.flush(graph);

        httpMock.verify();
      });
    }
  ));
});
