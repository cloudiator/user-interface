import {TestBed, async, inject} from '@angular/core/testing';

import {LoginGuard} from './login.guard';
import {AuthService} from '../services/auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RootStoreModule} from '../root-store';
import {ApiModule} from 'cloudiator-rest-api';
import {RouterTestingModule} from '@angular/router/testing';
import {AppDialogModule} from '../app-dialog/app-dialog.module';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ApiModule,
        RootStoreModule,
        RouterTestingModule,
        AppDialogModule
      ],
      providers: [
        RootStoreModule,
        LoginGuard,
        AuthService
      ]
    });
  });

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
