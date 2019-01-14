import { TestBed } from '@angular/core/testing';

import { ProcessDataService } from './process-data.service';
import {RootStoreModule} from '../root-store';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../app.module';
import {AppDialogModule} from '../app-dialog/app-dialog.module';

describe('ProcessDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
      HttpClientModule,
      ApiModule.forRoot(apiConfigFactory),
      AppDialogModule
    ]
  }));

  it('should be created', () => {
    const service: ProcessDataService = TestBed.get(ProcessDataService);
    expect(service).toBeTruthy();
  });
});
