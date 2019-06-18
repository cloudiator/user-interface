import {Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {RuntimeConfig} from '../model/RuntimeConfig';
import {Configuration} from 'cloudiator-rest-api';
import {environment} from '../../environments/environment';
import {RootStoreState, RuntimeConfigActions, RuntimeConfigSelectors} from '../root-store';
import {filter, take} from 'rxjs/operators';

/**
 * Responsible for fetching and setting up run options.
 */
@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService {

  /** @ignore */
  constructor(private http: HttpClient,
              private store: Store<RootStoreState.State>,
              @Optional() private configuration: Configuration) {

    if (environment.useRuntimeConfig) {
      this.fetchConfig();
    } else {
      this.store.dispatch(
        new RuntimeConfigActions.SetRuntimeConfigAction(<RuntimeConfig>{
          apiPath: environment.apiPath,
          authMode: environment.authMode,
          xApiKey: environment.xApiKey
        }));
    }
  }

  /**
   * fetches production config from assets.
   */
  private fetchConfig() {
    this.http.get<RuntimeConfig>(`${environment.href}assets/appConfig.json`).toPromise().then(value => {
      this.store.dispatch(new RuntimeConfigActions.SetRuntimeConfigAction(<RuntimeConfig>value));
    }).catch(() => {
      this.store.dispatch(new RuntimeConfigActions.SetRuntimeConfigAction(<RuntimeConfig>{
        apiPath: environment.apiPath,
        authMode: environment.authMode,
        xApiKey: environment.xApiKey
      }));
    });
  }

  /**
   * Returns a Promise that resolves to true as soon as the runtimeconfig is set up.
   * @return {Promise<any>}
   */
  public awaitConfigLoad(): Promise<any> {
    return new Promise(resolve =>
      this.store
        .pipe(
          select(RuntimeConfigSelectors.selectIsFetched),
          filter(isFetched => isFetched),
          take(1))
        .subscribe(() => resolve(true)));
  }

  /**
   * Returns apiPath from store.
   * @return {Observable<String>}
   */
  getApiPath(): Observable<String> {
    return this.store.pipe(select(RuntimeConfigSelectors.selectApiPath));
  }

  /**
   * Returns XApiKey from store.
   * @return {Observable<String>}
   */
  getXApiKey(): Observable<String> {
    return this.store.pipe(select(RuntimeConfigSelectors.selectXApiKey));
  }

  /**
   * Returns complete runtimeConfig from store.
   * @return {Observable<RuntimeConfig>}
   */
  getRuntimeConfig(): Observable<RuntimeConfig> {
    return this.store.pipe(select(RuntimeConfigSelectors.selectConfig));
  }
}
