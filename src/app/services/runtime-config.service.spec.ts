import { TestBed, inject } from '@angular/core/testing';

import { RuntimeConfigService } from './runtime-config.service';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';

describe('RuntimeConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
        ...fromRoot.reducers,
        'feature': combineReducers(fromRoot.reducers)
      }),
        HttpClientModule
      ],
      providers: [RuntimeConfigService]
    });
  });

  it('should be created', inject([RuntimeConfigService], (service: RuntimeConfigService) => {
    expect(service).toBeTruthy();
  }));
});
