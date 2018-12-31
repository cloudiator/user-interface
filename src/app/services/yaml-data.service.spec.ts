import {TestBed} from '@angular/core/testing';

import {YamlDataService} from './yaml-data.service';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {apiConfigFactory} from '../app.module';
import {AppDialogModule} from '../app-dialog/app-dialog.module';
import {RootStoreModule} from '../root-store';

describe('YamlDataService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
      ApiModule.forRoot(apiConfigFactory),
      HttpClientModule,
      AppDialogModule
    ],
    providers: []
  }));

  it('should be created', () => {
    const service: YamlDataService = TestBed.get(YamlDataService);
    expect(service).toBeTruthy();
  });

  // ToDO: finish when parseYaml is working correctly
  // it('onValidate should filter server caused errors', async () => {
  //   const service: YamlDataService = TestBed.get(YamlDataService);
  //
  //   spyOn(service.toastService, 'show').and.callThrough();
  //   const mockApi = spyOn(service.yamlApiService, 'parseYAML').and.returnValue(testData.job);
  //
  //   service.parseYaml('')
  //     .pipe(take(1))
  //     .subscribe(value => expect(value).toEqual(testData.job));
  //
  //   mockApi.and.returnValue(throwError(<HttpErrorResponse>{status: 500}));
  //   await service.parseYaml('');
  //   expect(service.toastService.show).toHaveBeenCalledWith({})
  // });
});
