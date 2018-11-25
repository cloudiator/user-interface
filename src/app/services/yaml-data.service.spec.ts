import {inject, TestBed} from '@angular/core/testing';

import {YamlDataService} from './yaml-data.service';
import {ApiModule, YamlService} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {apiConfigFactory} from '../app.module';
import {DialogService} from './dialog.service';
import {ToastService} from './toast.service';
import {Overlay} from '@angular/cdk/overlay';
import {Injector} from '@angular/core';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {of} from 'rxjs';

describe('YamlDataService', () => {

  const mockYamlService = jasmine.createSpyObj('YamlService', {
    'parseYaml': of({})
  });

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        ...fromRoot.reducers,
        'feature': combineReducers(fromRoot.reducers)
      }),
      ApiModule.forRoot(apiConfigFactory),
      HttpClientModule
    ],
    providers: [
      YamlDataService,
      // {provide: YamlService, useValue: mockYamlService},
      DialogService,
      ToastService,
      Overlay,
      Injector
    ]
  }));

  it('should be created', inject([YamlDataService], (service: YamlDataService) => {
    expect(service).toBeTruthy();
  }));
});
