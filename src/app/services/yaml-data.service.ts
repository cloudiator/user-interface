import {Injectable} from '@angular/core';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from './toast.service';
import {Job, YamlService} from 'cloudiator-rest-api';
import {of} from 'rxjs';
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
      if (yamlApiService.configuration && yamlApiService.configuration.apiKeys) {
        yamlApiService.configuration.apiKeys['X-API-Key'] = config.xApiKey;
      }
    });
  }

  public parseYaml(yaml: string): Promise<Job> {

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
    //     .toPromise();
    return of(<Job>{id: '4ebd98ce-09e5-4fb7-b439-e82eb2a7de69'}).toPromise();
  }
}
