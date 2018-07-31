import {TestBed, inject} from '@angular/core/testing';

import {DialogService} from './dialog.service';
import {Injector} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';

describe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DialogService,
        Injector,
        Overlay
      ]
    });
  });

  it('should be created', inject([DialogService], (service: DialogService) => {
    expect(service).toBeTruthy();
  }));
});
