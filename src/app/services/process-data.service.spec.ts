import { TestBed } from '@angular/core/testing';

import { ProcessDataService } from './process-data.service';

describe('ProcessDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessDataService = TestBed.get(ProcessDataService);
    expect(service).toBeTruthy();
  });
});
