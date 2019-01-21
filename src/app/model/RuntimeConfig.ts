/**
 * Model of Configfile that can be found in the assets to change config after compile time.
 */
export interface RuntimeConfig {
  /**
   * base url to the Api.
   */
  apiPath: string;
  /**
   * Authmode of the Api.
   */
  authMode: AuthMode;
  /**
   * auth key of the api if single AuthMode is used.
   */
  xApiKey: string;
}

/**
 * enum representing the different possible authentication modes of the Api.
 */
export enum AuthMode {
  SINGLE = 'SINGLE',
  STANDARD  = 'STANDARD'
}
