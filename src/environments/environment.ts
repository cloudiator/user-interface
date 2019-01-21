// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AuthMode} from '../app/model/RuntimeConfig';

export const environment = {
  production: false,
  useRuntimeConfig: false,
  href: '/',
  apiPath: 'https://881c45f1-765d-415c-9fd1-251063685f28.mock.pstmn.io',
  authMode: AuthMode.SINGLE,
  xApiKey: 'cd5f0aafad544fcfa29595c87f5c2bb8',
  notificationDuration: 10000
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
