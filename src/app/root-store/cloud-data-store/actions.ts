import {Action} from '@ngrx/store';
import {Cloud, Hardware, Image, Location} from 'cloudiator-rest-api';

export const SET_CLOUDS = '[Clouddata] set Cloud';
export const SET_CLOUD_IS_LOADING = '[Clouddata] set Cloud isLoading';
export const SET_HARDWARE = '[Clouddata] set Hardware';
export const SET_HARDWARE_IS_LOADING = '[Clouddata] set HARDWARE isLoading';
export const SET_IMAGES = '[Clouddata] set Images';
export const SET_IMAGE_IS_LOADING = '[Clouddata] set Image isLoading';
export const SET_LOCATIONS = '[Clouddata] set Locations';
export const SET_LOCATION_IS_LOADING = '[Clouddata] set Location isLoading';

export class SetCloudsAction implements Action {
  readonly type = SET_CLOUDS;

  constructor(public clouds: Cloud[]) {
  }
}

export class SetCloudIsLoading implements Action {
  readonly type = SET_CLOUD_IS_LOADING;

  constructor(public isLoading: boolean) {
  }
}

export class SetHardwareAction implements Action {
  readonly type = SET_HARDWARE;

  constructor(public hardware: Hardware[]) {
  }
}


export class SetHardwareIsLoading implements Action {
  readonly type = SET_HARDWARE_IS_LOADING;

  constructor(public isLoading: boolean) {
  }
}

export class SetImagesAction implements Action {
  readonly type = SET_IMAGES;

  constructor(public images: Image[]) {
  }
}


export class SetImageIsLoading implements Action {
  readonly type = SET_IMAGE_IS_LOADING;

  constructor(public isLoading: boolean) {
  }
}

export class SetLocationsAction implements Action {
  readonly type = SET_LOCATIONS;

  constructor(public locations: Location[]) {
  }
}


export class SetLocationIsLoading implements Action {
  readonly type = SET_LOCATION_IS_LOADING;

  constructor(public isLoading: boolean) {
  }
}


export type All =
  SetCloudsAction
  | SetCloudIsLoading
  | SetHardwareAction
  | SetHardwareIsLoading
  | SetImagesAction
  | SetImageIsLoading
  | SetLocationsAction
  | SetLocationIsLoading;
