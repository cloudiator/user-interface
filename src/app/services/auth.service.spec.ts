import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {ApiModule, Token} from 'cloudiator-rest-api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthActions, RootStoreModule} from '../root-store';
import {RouterTestingModule} from '@angular/router/testing';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import {of} from 'rxjs/internal/observable/of';
import * as testData from 'testing/test-data';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApiModule,
      HttpClientTestingModule,
      RootStoreModule,
      RouterTestingModule,
      AppDialogModule
    ]
  }));

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    service = TestBed.get(AuthService);

    spyOn(service.store, 'dispatch').and.stub();
    spyOn(service.toastService, 'show').and.stub();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('schould login correctly', async () => {
    spyOn(service.userApiService, 'login').and.returnValue(of<Token>(testData.tokenOne));

    await service.logIn(testData.loginOne).subscribe();

    expect(service.store.dispatch).toHaveBeenCalledTimes(1);
    expect(service.store.dispatch).toHaveBeenCalledWith(new AuthActions.LogInAction(testData.tokenOne));

    // await service.isLoggedIn().subscribe(bool => expect(bool).toBeFalsy());

    // service.logOut();

  });
});
