// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AuthMode} from '../app/model/RuntimeConfig';

export const environment = {
  production: false,
  // determines if appConfig.json is used
  useRuntimeConfig: false,
  // base path of project
  href: '/',
  // path to cloudiator rest-api
  apiPath: 'http://134.60.152.98:9000',
  // skip login and instead use xApiKey
  skipAuth: false,
  // authmMode of Cloudiator backend, if set to Single, the Login screen will be skipped and xApiKey is used instead.
  authMode: AuthMode.SINGLE,
  // api key for the Cloudiator rest-api
  xApiKey: 'secure',
  // Duration, timed notifications are shown
  notificationDuration: 10000,
  // path to the ssh tunnel, needed for the ssh Terminal Feature
  sshTunnelPath: 'ws://134.60.152.98:4341'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
