import {Hardware, Location} from 'cloudiator-rest-api';
import {of} from 'rxjs';
import * as testData from './test-data';

export class MockRuntimeConfigService {
  awaitConfigLoad() {
    return new Promise(r => r(true));
  }

  getRuntimeConfig() {
    return of(testData.runtimeConfigOne);
  }

  getApiPath() {
    return of(testData.runtimeConfigOne.apiPath);
  }
}

export function resolveAfterXSeconds(x: number): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, x * 1000);
  });
}

export function resolveAfter3Seconds(): Promise<any> {
  return resolveAfterXSeconds(3);
}
