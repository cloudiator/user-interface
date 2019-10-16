import {Injectable} from '@angular/core';
import {IpAddress, LoginCredential} from 'cloudiator-rest-api';
import {environment} from '../../environments/environment';
import {from, Observable, of} from 'rxjs';
import {RuntimeConfigService} from './runtime-config.service';
import {combineAll, map, mergeMap, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SshService {

  constructor(private runtimeConfig: RuntimeConfigService) {
  }

  public connectTo(ip: IpAddress, credential: LoginCredential): Observable<WebSocket> {

    // this.data.loginCredential
    // const protocol = environment.sshTunnelPath.includes('https://') ? 'wss://'
    //   : environment.sshTunnelPath.includes('http://') ? 'ws://'
    //     : console.error('SSH Tunnel Path contains no correct protocol');
    //
    // const hostPath = environment.sshTunnelPath.

    // wait for config load before loading ssh tunnel path and then returning a websocket
    return from(this.runtimeConfig.awaitConfigLoad())
      .pipe(
        map(() => this.runtimeConfig.getSshTunnelPath()),
        mergeMap(path$ => path$),
        take(1),
        map(path => {
          const socketUrl = `${path}/ssh` +
            `?ip=${btoa(ip.value)}&key=${btoa(credential.privateKey)}` +
            `&user=${btoa(credential.username)}`;
          return new WebSocket(socketUrl);
        }),
      );
  }

  public sshIsAvailable(): Observable<boolean> {
    return this.runtimeConfig.getSshTunnelPath().pipe(map(path => path && path !== ''));
  }
}
