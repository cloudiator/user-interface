import {TestBed, inject} from '@angular/core/testing';

import {RuntimeConfigService} from './runtime-config.service';
import {HttpClientModule} from '@angular/common/http';
import {RootStoreModule} from '../root-store';
import {ApiModule} from 'cloudiator-rest-api';
import {environment} from '../../environments/environment';

describe('RuntimeConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RootStoreModule,
        HttpClientModule,
      ],
      providers: [RuntimeConfigService]
    });
  });

  it('should be created', inject([RuntimeConfigService], (service: RuntimeConfigService) => {
    expect(service).toBeTruthy();
  }));

  it('should resolve awaitCOnfigLaod promise correctly', inject(
    [RuntimeConfigService],
    (service: RuntimeConfigService) => {
      spyOn(service, 'awaitConfigLoad').and.callThrough();

      return new Promise(resolve => {

        service.awaitConfigLoad()
          .then(bol => {
            expect(bol).toBeTruthy();
            resolve();
          })
          .catch(() => fail('should resolve'));
      });
    }));
});
