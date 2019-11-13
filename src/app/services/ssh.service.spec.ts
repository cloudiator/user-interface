import { TestBed } from '@angular/core/testing';

import { SshService } from './ssh.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../app.module';
import {RootStoreModule} from '../root-store';

describe('SshService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      ApiModule.forRoot(apiConfigFactory),
      RootStoreModule
    ]
  }));

  it('should be created', () => {
    const service: SshService = TestBed.get(SshService);
    expect(service).toBeTruthy();
  });
});
