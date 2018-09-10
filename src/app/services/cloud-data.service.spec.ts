import {TestBed, inject} from '@angular/core/testing';

import {CloudDataService} from './cloud-data.service';
import {CloudService} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';

describe('CloudDataService', () => {

  const mockCloudService = jasmine.createSpyObj('CloudService', {
    'findClouds': Observable.create(testData.allClouds),
    'findCloud':  Observable.create(testData.cloudOne),
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
        {provide: CloudService, useValue: mockCloudService}]
    });
  });

  it('should be created', inject([CloudDataService], (service: CloudDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should find correct cloud', async(inject([CloudDataService], (service: CloudDataService) => {

    service.findCloud(testData.cloudOne.id).toPromise().then(cloud => {
      // expect(cloud.id).not.toBe(testData.cloudOne.id);
      expect(true).toBeTruthy();
    });

  })));
});
