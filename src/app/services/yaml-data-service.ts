import {Injectable} from '@angular/core';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from './toast.service';
import {Job, YamlService} from 'cloudiator-rest-api';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {catchError} from 'rxjs/operators';
import {ToastType} from '../model/toast';

@Injectable({
  providedIn: 'root'
})
export class YamlDataService {

  constructor(private yamlApiService: YamlService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<fromRoot.State>,
              private toastService: ToastService,
              private httpClient: HttpClient) {

    store.pipe(select(fromRoot.getRuntimeConfig)).subscribe(config => {
      yamlApiService.basePath = config.apiPath;
      if (yamlApiService.configuration) {
        yamlApiService.configuration.apiKeys['X-API-Key'] = config.xApiKey;
      }
    });
  }

  public parseYaml(yaml: string): Promise<Job> {
    return this.yamlApiService.parseYAML(yaml)
      .pipe(catchError(err => {
        switch (err.status) {
          case 400:
          case 504:
            this.toastService.show({text: 'Server had an internal Error', type: ToastType.DANGER}, true);
            return throwError(err);
          default:
            return throwError(err);
        }
      }))
      .toPromise();
  }
}
