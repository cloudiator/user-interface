import {TestBed} from '@angular/core/testing';

import {QueueDataService} from './queue-data.service';
import {RootStoreModule} from '../root-store';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {apiConfigFactory} from '../app.module';

describe('QueueDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
      ApiModule.forRoot(apiConfigFactory),
      HttpClientModule]
  }));

  it('should be created', () => {
    const service: QueueDataService = TestBed.get(QueueDataService);
    expect(service).toBeTruthy();
  });
});
