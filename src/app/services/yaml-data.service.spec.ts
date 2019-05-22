import {inject, TestBed} from '@angular/core/testing';

import {YamlDataService} from './yaml-data.service';
import {ApiModule} from 'cloudiator-rest-api';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import {RootStoreModule} from '../root-store';
import * as testData from 'testing/test-data';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {testApiFactory} from 'testing/test-data';
import {ToastService} from '../app-dialog/services/toast.service';

describe('YamlDataService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
      ApiModule.forRoot(testApiFactory),
      HttpClientTestingModule,
      AppDialogModule
    ],
    providers: []
  }));

  it('should be created', () => {
    const service: YamlDataService = TestBed.get(YamlDataService);
    expect(service).toBeTruthy();
  });

  it('should return parsed Parsed Job', inject(
    [YamlDataService, HttpTestingController],
    (service: YamlDataService, httpMock: HttpTestingController) => {
      const apiPath = testApiFactory().basePath;
      return new Promise(async resolve => {
        await service.parseYaml(testData.jobYaml)
          .subscribe(res => {
            expect(res).toEqual(testData.jobOne);
            resolve();
          });

        const req = httpMock.expectOne(`${apiPath}/yaml`);
        expect(req.request.body).toEqual(testData.jobYaml);
        req.flush(testData.jobOne);
      });
    }
  ));

  it('should catch Bad Requests', inject(
    [ToastService, YamlDataService, HttpTestingController],
    (toastService: ToastService, service: YamlDataService, httpMock: HttpTestingController) => {
      const apiPath = testApiFactory().basePath;

      return new Promise(async resolve => {
        await service.parseYaml('').subscribe(
          () => fail('request should fail'),
          err => {
            expect(err).toBeTruthy();
            httpMock.verify();
            resolve();
          }
        );

        const req = httpMock.expectOne(`${apiPath}/yaml`);

        req.flush({}, {status: 400, statusText: 'Bad Request'});
      });
    }
  ));
});
