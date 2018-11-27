import {TestBed, inject} from '@angular/core/testing';

import {DialogService} from './dialog.service';
import {AppDialogModule} from '../app-dialog.module';

describe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppDialogModule
      ],
      providers: []
    });
  });

  it('should be created', inject([DialogService], (service: DialogService) => {
    expect(service).toBeTruthy();
  }));
});
