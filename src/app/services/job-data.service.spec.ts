import { TestBed } from '@angular/core/testing';

import { JobDataService } from './job-data.service';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {DialogService} from './dialog.service';
import {ToastService} from './toast.service';
import {Overlay} from '@angular/cdk/overlay';
import {Injector} from '@angular/core';

describe('JobDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        ...fromRoot.reducers,
        'feature': combineReducers(fromRoot.reducers)
      }),
      ApiModule,
      HttpClientModule
    ],
    providers: [
      DialogService,
      ToastService,
      Overlay,
      Injector
    ]
  }));

  it('should be created', () => {
    const service: JobDataService = TestBed.get(JobDataService);
    expect(service).toBeTruthy();
  });
});
