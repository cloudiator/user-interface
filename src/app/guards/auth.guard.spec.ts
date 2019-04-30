import {TestBed, async, inject} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {UserService} from 'cloudiator-rest-api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RootStoreModule} from '../root-store';
import {StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {AppDialogModule} from '../app-dialog/app-dialog.module';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RootStoreModule,
        RouterTestingModule,
        AppDialogModule
      ],
      providers: [
        AuthGuard,
        UserService
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
