import { TestBed } from '@angular/core/testing';

import { YamlDataService } from './yaml-data.service';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {apiConfigFactory} from '../app.module';
import {DialogService} from './dialog.service';
import {ToastService} from './toast.service';
import {Overlay} from '@angular/cdk/overlay';
import {Injector} from '@angular/core';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';

describe('YamlDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        ...fromRoot.reducers,
        'feature': combineReducers(fromRoot.reducers)
      }),
      HttpClientModule,
      ApiModule.forRoot(apiConfigFactory)
    ],
    providers: [
      YamlDataService,
      DialogService,
      ToastService,
      Overlay,
      Injector
    ]
  }));

  it('should be created', () => {
    const service: YamlDataService = TestBed.get(YamlDataService);
    expect(service).toBeTruthy();
  });
});
