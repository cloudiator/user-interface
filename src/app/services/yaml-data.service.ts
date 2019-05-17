import {Injectable} from '@angular/core';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {Job, YamlService} from 'cloudiator-rest-api';
import {Observable, of, throwError} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {RootStoreState, RuntimeConfigSelectors} from '../root-store';
import {ToastType} from '../app-dialog/model/toast';
import {catchError} from 'rxjs/operators';

/**
 * Service responsible for parsing yamls.
 */
@Injectable({
  providedIn: 'root'
})
export class YamlDataService {

  /** @ignore */
  constructor(public yamlApiService: YamlService,
              public runtimeConfigService: RuntimeConfigService,
              public store: Store<RootStoreState.State>,
              public toastService: ToastService) {
  }

  /**
   * sends a yaml parse request and handles potential errors.
   * @param {string} yaml
   * @return {Observable<Job>}
   */
  public parseYaml(yaml: string): Observable<Job> {
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
        }));
  }
}
