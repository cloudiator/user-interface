import {Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as fromRoot from '../reducers';
import * as runtimeConfigActions from '../actions/runtime-config.actions';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {RuntimeConfig} from '../model/RuntimeConfig';
import {SetRuntimeConfigAction} from '../actions/runtime-config.actions';
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
      this.store.dispatch(new SetRuntimeConfigAction(<RuntimeConfig>{apiPath: environment.apiPath, xApiKey: environment.xApiKey}));
    }
  }

  private fetchConfig() {
    this.http.get<RuntimeConfig>(`${environment.href}assets/appConfig.json`).toPromise().then(value => {
      this.store.dispatch(new SetRuntimeConfigAction(<RuntimeConfig>value));
    }).catch(() => {
      this.store.dispatch(new SetRuntimeConfigAction(<RuntimeConfig>{apiPath: environment.apiPath, xApiKey: environment.xApiKey}));
    });
  }

  public awaitConfigLoad(): Promise<any> {
    return new Promise(resolve => {
      const obs = this.store.select(fromRoot.getRuntimeConfig).subscribe(value => {
        if (value.apiPath !== '' && value.xApiKey !== '') {
          resolve(true);
        }
      });
    });
  }

  getApiPath(): Observable<String> {
    return this.store.select(fromRoot.getApiPath);
  }

  getXApiKey(): Observable<String> {
    return this.store.select(fromRoot.getXApiKey);
  }

  getRuntimeConfig(): Observable<RuntimeConfig> {
    return this.store.select(fromRoot.getRuntimeConfig);
  }
}
