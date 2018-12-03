import {TestBed} from '@angular/core/testing';

import {EditorService} from './editor.service';
import {take} from 'rxjs/operators';
import * as fromEditor from '../actions/editor.actions';
import {RootStoreModule} from '../root-store';

describe('EditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RootStoreModule
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

    await service.store.dispatch(new fromEditor.ChangesSavedAction());
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
