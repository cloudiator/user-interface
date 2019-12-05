import {Injectable} from '@angular/core';
import {IpAddress, LoginCredential} from 'cloudiator-rest-api';
import {from, Observable} from 'rxjs';
import {RuntimeConfigService} from './runtime-config.service';
import {map, mergeMap, take} from 'rxjs/operators';

/**
 * Service Handling SSH connections tunneled through the SSH Backend.
 */
@Injectable({
  providedIn: 'root'
})
export class SshService {

  /** @ignore **/
  constructor(private runtimeConfig: RuntimeConfigService) {
  }

  /**
   * Connects to the SSH Tunnel backend via a Websocket.
   * @param {IpAddress} ip Ip of the ssh machine, the backend should tunnel to
   * @param {LoginCredential} credential Credentials needed for authentication of ssh machine.
   * @return {Observable<WebSocket>} ssh connection ready to be attached to Xterm.
   */
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

  /**
   * Returns a stream that Checks, whether requirements for the SSH Terminal feature are met.
   * @return {Observable<boolean>}
   */
  public sshIsAvailable(): Observable<boolean> {
    return this.runtimeConfig.getSshTunnelPath().pipe(map(path => path && path !== ''));
  }
}
