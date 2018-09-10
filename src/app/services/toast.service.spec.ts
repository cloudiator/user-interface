import {TestBed, inject} from '@angular/core/testing';

import {ToastService} from './toast.service';
import {Overlay} from '@angular/cdk/overlay';
import {DialogService} from './dialog.service';
import {Injector} from '@angular/core';

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DialogService,
        ToastService,
        Overlay,
        Injector
      ]
    });
  });

  it('should be created', inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  }));
});
