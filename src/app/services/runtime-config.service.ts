import {Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as fromRoot from '../reducers';
import * as runtimeConfigActions from '../actions/runtime-config.actions';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {RuntimeConfig} from '../model/RuntimeConfig';
import {SetRuntimeConfigAction} from '../actions/runtime-config.actions';
import {Configuration} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService {

  constructor(private http: HttpClient,
              private store: Store<fromRoot.State>,
              @Optional() private configuration: Configuration) {
    this.fetchConfig();
  }

  private fetchConfig() {
    this.http.get<RuntimeConfig>('/assets/appConfig.json').toPromise().then(value => {
      this.store.dispatch(new SetRuntimeConfigAction(<RuntimeConfig>value));
    });
  }

  public awaitConfigLoad(): Promise<any> {
    return new Promise(resolve => {
      const obs = this.store.select(fromRoot.getRuntimeConfig).subscribe(value => {
        if (value.apiPath !== '' && value.xApiKey !== '') {
          console.log('resolved');
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
