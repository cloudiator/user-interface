import {Injectable, OnDestroy} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {RuntimeConfigService} from '../services/runtime-config.service';
import {AuthMode} from '../model/RuntimeConfig';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor, OnDestroy {

  authMode = null;
  apiPath = null;
  currentToken = null;

  subscriptions: Subscription[] = [];

  constructor(private authService: AuthService,
              private runtimeConfigService: RuntimeConfigService) {
    this.subscriptions.push(
      this.runtimeConfigService.getRuntimeConfig().subscribe(config => {
        this.apiPath = config.apiPath;
        this.authMode = config.authMode;

        // use config token if authmode is single else get token from authService
        if (config.authMode === AuthMode.SINGLE) {
          this.currentToken = config.xApiKey;
        } else {
          this.subscriptions.push(
            authService.getToken().subscribe(token => {
              this.currentToken = token;
            }));
        }
      }));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // await config load and then run request
    return new Observable(subscriber => {
      this.runtimeConfigService.awaitConfigLoad().then(() => subscriber.next());
    }).pipe(
      mergeMap(() => next.handle(this.changeRequest(request)))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private changeRequest(request: HttpRequest<any>): HttpRequest<any> {

    // add base path to request url. request path starts with
    const url = request.url.replace('${api_path}', this.apiPath);

    // add token
    const headers = request.headers.set('X-API-Key', [this.currentToken]);

    return request.clone({
      url: url,
      headers: headers
    });
  }

}
