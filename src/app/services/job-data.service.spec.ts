import {inject, TestBed} from '@angular/core/testing';

import { JobDataService } from './job-data.service';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {DialogService} from '../app-dialog/services/dialog.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {Overlay} from '@angular/cdk/overlay';
import {Injector} from '@angular/core';
import {AppDialogModule} from '../app-dialog/app-dialog.module';

describe('JobDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        ...fromRoot.reducers,
        'feature': combineReducers(fromRoot.reducers)
      }),
      ApiModule,
      HttpClientModule,
      AppDialogModule
    ],
    providers: [
      JobDataService
    ]
  }));

  it('should be created', inject([JobDataService], (service: JobDataService) => {
    expect(service).toBeTruthy();
  }));
});
