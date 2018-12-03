import {inject, TestBed} from '@angular/core/testing';

import { JobDataService } from './job-data.service';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import {RootStoreModule} from '../root-store';

describe('JobDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
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
