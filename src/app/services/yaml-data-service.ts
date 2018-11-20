import {Injectable} from '@angular/core';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from './toast.service';
import {Job, YamlService} from 'cloudiator-rest-api';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class YamlDataService {

  constructor(private yamlApiService: YamlService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<fromRoot.State>,
              private toastService: ToastService) {

    store.pipe(select(fromRoot.getRuntimeConfig)).subscribe(config => {
      yamlApiService.basePath = config.apiPath;
      if (yamlApiService.configuration) {
        yamlApiService.configuration.apiKeys['X-API-Key'] = config.xApiKey;
      }
    });
  }

  public parseYaml(yaml: string): Observable<HttpResponse<Job>> {
    return this.yamlApiService.parseYAML(yaml, 'response');
  }
}
