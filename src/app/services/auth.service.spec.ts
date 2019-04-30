import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RootStoreModule} from '../root-store';
import {RouterTestingModule} from '@angular/router/testing';
import {AppDialogModule} from '../app-dialog/app-dialog.module';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApiModule,
      HttpClientTestingModule,
      RootStoreModule,
      RouterTestingModule,
      AppDialogModule
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
