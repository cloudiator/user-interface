import {Hardware, Location} from 'cloudiator-rest-api';

export function expectHardware(h1: Hardware, h2: Hardware): void {
  if (!h1) {
    if (!h2) {
      return;
    } else {
      expect(h2).toBeNull();
      return;
    }
  } else if (!h2) {
    expect(h2).toBeTruthy();
    return;
  }

  expect(h1.id).toBe(h2.id);
  expect(h1.name).toBe(h2.name);
  expect(h1.providerId).toBe(h2.providerId);
  expect(h1.cores).toBe(h2.cores);
  expect(h1.ram).toBe(h2.ram);
  expect(h1.disk).toBe(h2.disk);
  expectLocation(h1.location, h2.location);
}

export function expectLocation(l1: Location, l2: Location): void {
  if (!l1) {
    if (!l2) {
      return;
    } else {
      expect(l2).toBeNull();
      return;
    }
  } else if (!l2) {
    expect(l2).toBeTruthy();
    return;
  }

  Object.keys(l1).forEach(key => expect(l1[key]).toBe(l2[key]));
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
