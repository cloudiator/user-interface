import * as _ from 'lodash';

export function set(obj: any) {
  return _.partial(setTo, {obj: obj});
}

export function setTo(obj: any, obj2: any) {
  obj.obj = obj2;
}
