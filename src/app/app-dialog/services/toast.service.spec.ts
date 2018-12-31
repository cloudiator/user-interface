import {TestBed, inject} from '@angular/core/testing';

import {ToastService} from './toast.service';
import {AppDialogModule} from '../app-dialog.module';

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppDialogModule
      ],
      providers: []
    });
  });

  it('should be created', inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  }));
});
