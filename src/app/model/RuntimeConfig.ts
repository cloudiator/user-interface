/**
 * Model of Configfile that can be found in the assets to change config after compile time.
 */
export interface RuntimeConfig {
  apiPath: string;
  authMode: AuthMode;
  xApiKey: string;
}

export enum AuthMode {
  SINGLE = 'SINGLE',
  STANDARD  = 'STANDARD'
}