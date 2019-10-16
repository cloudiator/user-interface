// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AuthMode} from '../app/model/RuntimeConfig';

export const environment = {
  production: false,
  useRuntimeConfig: false,
  href: '/',
  apiPath: 'http://134.60.152.98:9000',
  skipAuth: false,
  authMode: AuthMode.SINGLE,
  xApiKey: 'secure',
  notificationDuration: 10000,
  sshTunnelPath: 'ws://134.60.152.98:4341'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
