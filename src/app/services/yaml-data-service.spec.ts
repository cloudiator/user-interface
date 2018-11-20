import { TestBed } from '@angular/core/testing';

import { YamlDataService } from './yaml-data-service';

describe('YamlDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YamlDataService = TestBed.get(YamlDataService);
    expect(service).toBeTruthy();
  });
});
