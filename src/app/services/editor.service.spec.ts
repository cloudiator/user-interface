import {TestBed} from '@angular/core/testing';

import {EditorService} from './editor.service';
import {take} from 'rxjs/operators';
import {EditorActions, RootStoreModule} from '../root-store';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../app.module';
import {AppDialogModule} from '../app-dialog/app-dialog.module';

describe('EditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule,
      HttpClientModule,
      ApiModule.forRoot(apiConfigFactory),
      AppDialogModule
    ]
  }));

  beforeEach(() => {
  });

  it('should be created', () => {
    const service: EditorService = TestBed.get(EditorService);
    expect(service).toBeTruthy();
  });

  it('save state should be consistent', async () => {
    const service: EditorService = TestBed.get(EditorService);

    service.store.dispatch(new EditorActions.UploadFileAction('', 'unnamed.yaml'));

    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeFalsy());

    await service.setEditorValue('');
    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeFalsy());

    await service.setEditorValue('different value');
    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeTruthy());

    await service.store.dispatch(new EditorActions.ChangesSavedAction());
    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeFalsy());

    await service.setEditorValue('');
    service.HasUnsaveChanges()
      .pipe(take(1))
      .subscribe(value => expect(value).toBeTruthy());
  });

  it('uploadFile should reject on wrong arguments', async () => {
    const service: EditorService = TestBed.get(EditorService);

    await service.uploadFile(null)
      .then(() => fail('files == null should throw exception'))
      .catch(err => expect(err).toEqual('could not load file'));

    await service.uploadFile(<FileList>{length: 0})
      .then(() => fail('length == 0 should throw exception'))
      .catch(err => expect(err).toEqual('could not load file'));
  });
});
