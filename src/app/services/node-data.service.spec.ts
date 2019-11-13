import { TestBed } from '@angular/core/testing';

import { NodeDataService } from './node-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiModule, NodeService} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../app.module';

describe('NodeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      ApiModule.forRoot(apiConfigFactory)
    ],
  }));

  it('should be created', () => {
    const service: NodeDataService = TestBed.get(NodeDataService);
    expect(service).toBeTruthy();
  });
});
