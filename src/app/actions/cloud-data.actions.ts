import {Action} from '@ngrx/store';
import {Cloud, Hardware, Image} from 'cloudiator-rest-api';

export const SET_CLOUDS = '[Clouddata] set Cloud';
export const SET_HARDWARE = '[Clouddata] set Hardware';
export const SET_IMAGES = '[Clouddata] set Images';

export class SetCloudsAction implements Action {
  readonly type = SET_CLOUDS;

  constructor(public clouds: Cloud[]) {
  }
}
export class SetHardwareAction implements Action {
  readonly type = SET_HARDWARE;

  constructor(public hardware: Hardware[]) {
  }
}

export class SetImagesAction implements Action {
  readonly type = SET_IMAGES;

  constructor(public images: Image[]) {
  }
}


export type All = SetCloudsAction | SetHardwareAction | SetImagesAction;
