import {inject, TestBed} from '@angular/core/testing';
import {HttpAuthInterceptor} from './http-auth.interceptor';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ApiModule} from 'cloudiator-rest-api';
import {RootStoreModule} from '../root-store';
import {RouterTestingModule} from '@angular/router/testing';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import * as testData from 'testing/test-data';
import {RuntimeConfigService} from '../services/runtime-config.service';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {apiConfigFactory} from '../app.module';
import {MockRuntimeConfigService} from '../../../testing/test.util';

describe('HttpAuthInterceptor', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RootStoreModule,
        RouterTestingModule,
        AppDialogModule,
        HttpClientTestingModule,
        ApiModule.forRoot(apiConfigFactory)
      ],
      providers: [
        HttpAuthInterceptor,
        {
          provide: RuntimeConfigService,
          useClass: MockRuntimeConfigService
        },
        {
          provide: AuthService,
          useValue: null
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpAuthInterceptor,
          multi: true
        }
      ]
    });
  });

  it('should create', inject([HttpAuthInterceptor], (interceptor: HttpAuthInterceptor) => {
    expect(interceptor).toBeTruthy();
  }));

  it('should handle requests',
    inject([HttpTestingController, HttpClient],
      (httpMock: HttpTestingController, http: HttpClient) => {
        return new Promise(async resolve => {
          await http.get<any>('http://example.com/test')
            .subscribe(res => {
              expect(res).toEqual({id: 1});
              resolve();
            });

          const httpRequest = httpMock.expectOne('http://example.com/test');
          expect(httpRequest.request.method).toEqual('GET');

          httpRequest.flush({id: 1});

          httpMock.verify();

          resolve();
        });
      }
    )
  );

  it('should replace ${api_path}',
    inject([HttpTestingController, HttpClient],
      (httpMock: HttpTestingController, http: HttpClient) => {
        const apiPath = testData.runtimeConfigOne.apiPath;

        return new Promise(async resolve => {
          await http.get('${api_path}/test')
            .subscribe(res => {
              expect(res).toBeTruthy();
              resolve();
            });

          const httpRequest = httpMock.expectOne(`${apiPath}/test`);
          expect(httpRequest.request.method).toEqual('GET');

          httpRequest.flush({});

          httpMock.verify();
        });
      }
    )
  );

  it('should replace Authentication correctly',
    inject([HttpTestingController, HttpClient],
      (httpMock: HttpTestingController, http: HttpClient) => {
        const apiKey = testData.runtimeConfigOne.xApiKey;

        return new Promise(async resolve => {
          await http.get('/').subscribe(res => {
            expect(res).toBeTruthy();
            resolve();
          });

          const httpRequest = httpMock.expectOne('/');
          expect(httpRequest).toBeTruthy();
          expect(httpRequest.request.headers.keys()).toContain('X-API-Key');
          expect(httpRequest.request.headers.get('X-API-Key')).toEqual(apiKey);

          httpRequest.flush({});

          httpMock.verify();
        });
      }
    )
  );

});
