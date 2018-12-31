import {Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {RuntimeConfig} from '../model/RuntimeConfig';
import {Configuration} from 'cloudiator-rest-api';
import {environment} from '../../environments/environment';
import {RootStoreState, RuntimeConfigActions, RuntimeConfigSelectors} from '../root-store';

@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService {

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

  public awaitConfigLoad(): Promise<any> {
    return new Promise(resolve => {
      const obs = this.store.pipe(select(RuntimeConfigSelectors.selectIsFetched)).subscribe(fetched => {
        if (fetched) {
          resolve(true);
        }
      });
    });
  }

  getApiPath(): Observable<String> {
    return this.store.pipe(select(RuntimeConfigSelectors.selectApiPath));
  }

  getXApiKey(): Observable<String> {
    return this.store.pipe(select(RuntimeConfigSelectors.selectXApiKey));
  }

  getRuntimeConfig(): Observable<RuntimeConfig> {
    return this.store.pipe(select(RuntimeConfigSelectors.selectConfig));
  }
}
