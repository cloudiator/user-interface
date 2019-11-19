import {TestBed} from '@angular/core/testing';

import {NodeDataService} from './node-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiModule, NodeService} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../app.module';
import * as testData from '../../../testing/test-data';

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

  it('should convert uppercase attributes correctly', () => {
    const service: NodeDataService = TestBed.get(NodeDataService);
    expect(NodeDataService.ipAddressMap({ipAddresses: [testData.brokenIpAddress]}))
      .toEqual({ipAddresses: [testData.correctIpAddress]});
  });
});
