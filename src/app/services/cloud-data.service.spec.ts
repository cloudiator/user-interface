import { TestBed, inject } from '@angular/core/testing';

import { CloudDataService } from './cloud-data.service';
import {CloudService} from '..';

describe('CloudDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudDataService, CloudService]
    });
  });

  it('should be created', inject([CloudDataService], (service: CloudDataService) => {
    expect(service).toBeTruthy();
  }));
});
