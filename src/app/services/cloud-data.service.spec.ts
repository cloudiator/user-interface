import { TestBed, inject } from '@angular/core/testing';

import { CloudDataService } from './cloud-data.service';
import {CloudService} from '..';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from  '../reducers';

describe('CloudDataService', () => {
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
        CloudService]
    });
  });

  it('should be created', inject([CloudDataService], (service: CloudDataService) => {
    expect(service).toBeTruthy();
  }));
});
