import { TestBed, inject } from '@angular/core/testing';

import { CloudDataService } from './cloud-data.service';

describe('CloudDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudDataService]
    });
  });

  it('should be created', inject([CloudDataService], (service: CloudDataService) => {
    expect(service).toBeTruthy();
  }));
});
