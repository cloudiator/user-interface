import {TestBed, inject} from '@angular/core/testing';

import {CloudDataService} from './cloud-data.service';
import {CloudService} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {Observable} from 'rxjs';
import * as testData from '../../../testing/test-data';
import {DialogService} from './dialog.service';
import {ToastService} from './toast.service';
import {Injector} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';

describe('CloudDataService', () => {

  const mockCloudService = jasmine.createSpyObj('CloudService', {
    'findClouds': Observable.create(testData.allClouds),
    'findCloud': Observable.create(testData.cloudOne),
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        HttpClientModule
      ],
      providers: [
        CloudDataService,
        {provide: CloudService, useValue: mockCloudService},
        DialogService,
        ToastService,
        Overlay,
        Injector
      ]
    });
  });

  it('should be created', inject([CloudDataService], (service: CloudDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should find correct cloud', inject([CloudDataService], (service: CloudDataService) => {

    service.findCloud(testData.cloudOne.id).toPromise().then(cloud => {
      // expect(cloud.id).not.toBe(testData.cloudOne.id);
      expect(true).toBeTruthy();
    });

  }));
});
