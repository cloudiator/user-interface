import {Injectable} from '@angular/core';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {Job, YamlService} from 'cloudiator-rest-api';
import {Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class YamlDataService {

  constructor(public yamlApiService: YamlService,
              public runtimeConfigService: RuntimeConfigService,
              public store: Store<fromRoot.State>,
              public toastService: ToastService) {
    store.pipe(select(fromRoot.getRuntimeConfig)).subscribe(config => {
      yamlApiService.basePath = config.apiPath;
      if (yamlApiService.configuration && yamlApiService.configuration.apiKeys) {
        yamlApiService.configuration.apiKeys['X-API-Key'] = config.xApiKey;
      }
    });
  }

  public parseYaml(yaml: string): Observable<Job> {

    // ToDo: Absolutely dangerous, spams server with jobs if yaml is valid.

    //   return this.yamlApiService.parseYAML(yaml)
    //     .pipe(catchError(err => {
    //       switch (err.status) {
    //         case 400:
    //         case 504:
    //           this.toastService.show({text: 'Server had an internal Error', type: ToastType.DANGER}, true);
    //           return throwError(err);
    //         default:
    //           return throwError(err);
    //       }
    //     }))
    return of(<Job>{id: '4ebd98ce-09e5-4fb7-b439-e82eb2a7de69'});
  }
}
