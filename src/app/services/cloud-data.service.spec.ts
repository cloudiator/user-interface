import {TestBed, inject} from '@angular/core/testing';

import {CloudDataService} from './cloud-data.service';
import {ApiModule, CloudService} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {DialogService} from './dialog.service';
import {ToastService} from './toast.service';
import {Injector} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {apiConfigFactory} from '../app.module';

describe('CloudDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory)
      ],
      providers: [
        CloudDataService,
        DialogService,
        ToastService,
        Overlay,
        Injector]
    });
  });

  it('should be created', inject([CloudDataService], (service: CloudDataService) => {
    expect(service).toBeTruthy();
  }));
});
