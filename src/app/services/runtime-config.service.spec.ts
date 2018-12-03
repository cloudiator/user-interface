import { TestBed, inject } from '@angular/core/testing';

import { RuntimeConfigService } from './runtime-config.service';
import {HttpClientModule} from '@angular/common/http';
import {RootStoreModule} from '../root-store';

describe('RuntimeConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
       RootStoreModule,
        HttpClientModule
      ],
      providers: [RuntimeConfigService]
    });
  });

  it('should be created', inject([RuntimeConfigService], (service: RuntimeConfigService) => {
    expect(service).toBeTruthy();
  }));
});
