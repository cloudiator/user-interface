import {Injectable, Optional} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {RuntimeConfig} from '../model/RuntimeConfig';
import {Configuration} from 'cloudiator-rest-api';
import {environment} from '../../environments/environment';
import {RootStoreState, RuntimeConfigActions, RuntimeConfigSelectors} from '../root-store';
import {filter, map, take} from 'rxjs/operators';

/**
 * Responsible for fetching and setting up run options.
 */
@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService {

  /**
   * custom HttpClient that isn't gated by Interceptors.
   * The http-auth-interceptor needs this service,
   * thus this service has to run before initializing the interceptors
   */
  private httpClient: HttpClient;

  /** @ignore */
  constructor(private http: HttpClient,
              private store: Store<RootStoreState.State>,
              private handler: HttpBackend,
              @Optional() private configuration: Configuration) {

    this.httpClient = new HttpClient(handler);
    if (environment.useRuntimeConfig) {
      this.fetchConfig();
    } else {
      this.dispatchDefaultConfig();
    }
  }

  /**
   * fetches production config from assets.
   */
  private fetchConfig() {
    this.httpClient.get<RuntimeConfig>(`${environment.href}assets/appConfig.json`)
      .pipe(map(config => {
        // replace ssh tunnel placeholder with undefined so it will be handled correctly by the ssh is available method
        return config.sshTunnelPath === '${SSH_TUNNEL_PATH}'
          ? Object.assign(config, {sshTunnelPath: undefined})
          : config;
      }))
      .subscribe(value => {
          this.store.dispatch(new RuntimeConfigActions.SetRuntimeConfigAction(<RuntimeConfig>value));
        },
        () => this.dispatchDefaultConfig()
      );
  }

  /**
   * Dispatches Config from Environment to the Store.
   */
  private dispatchDefaultConfig() {
    this.store.dispatch(new RuntimeConfigActions.SetRuntimeConfigAction(<RuntimeConfig>{
      apiPath: environment.apiPath,
      authMode: environment.authMode,
      xApiKey: environment.xApiKey,
      sshTunnelPath: environment.sshTunnelPath
    }));
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
   * Returns ShhTunnelPath from Store.
   * @return {Observable<string | null>}
   */
  getSshTunnelPath(): Observable<string | null> {
    return this.store.pipe(select(RuntimeConfigSelectors.selectSshTunnelPath));
  }

  /**
   * Returns complete runtimeConfig from store.
   * @return {Observable<RuntimeConfig>}
   */
  getRuntimeConfig(): Observable<RuntimeConfig> {
    return this.store.pipe(select(RuntimeConfigSelectors.selectConfig));
  }
}
