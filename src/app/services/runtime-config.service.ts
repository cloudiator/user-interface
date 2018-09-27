import {Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as fromRoot from '../reducers';
import {SetRuntimeConfigAction} from '../actions/runtime-config.actions';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AuthMode, RuntimeConfig} from '../model/RuntimeConfig';
import {Configuration} from 'cloudiator-rest-api';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService {

  constructor(private http: HttpClient,
              private store: Store<fromRoot.State>,
              @Optional() private configuration: Configuration) {

    if (environment.useRuntimeConfig) {
      this.fetchConfig();
    } else {
      this.store.dispatch(new SetRuntimeConfigAction(<RuntimeConfig>{
        apiPath: environment.apiPath,
        authMode: environment.authMode,
        xApiKey: environment.xApiKey
      }));
    }
  }

  private fetchConfig() {
    this.http.get<RuntimeConfig>(`${environment.href}assets/appConfig.json`).toPromise().then(value => {
      this.store.dispatch(new SetRuntimeConfigAction(<RuntimeConfig>value));
    }).catch(() => {
      this.store.dispatch(new SetRuntimeConfigAction(<RuntimeConfig>{
        apiPath: environment.apiPath,
        authMode: environment.authMode,
        xApiKey: environment.xApiKey
      }));
    });
  }

  public awaitConfigLoad(): Promise<any> {
    return new Promise(resolve => {
      const obs = this.store.pipe(select(fromRoot.getRuntimeConfigIsFetched)).subscribe(fetched => {
        if (fetched) {
          resolve(true);
        }
      });
    });
  }

  getApiPath(): Observable<String> {
    return this.store.pipe(select(fromRoot.getApiPath));
  }

  getXApiKey(): Observable<String> {
    return this.store.pipe(select(fromRoot.getXApiKey));
  }

  getRuntimeConfig(): Observable<RuntimeConfig> {
    return this.store.pipe(select(fromRoot.getRuntimeConfig));
  }
}
