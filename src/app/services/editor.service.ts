import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import saveAs from 'file-saver';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {EditorActions, EditorSelectors, RootStoreState} from '../root-store';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(public store: Store<RootStoreState.State>) {
  }

  public getEditorValue(): Observable<string> {
    return this.store.pipe(select(EditorSelectors.selectValue));
  }

  public setEditorValue(value: string) {
    this.store.dispatch(new EditorActions.SetValueAction(value));
  }

  public getFilename(): Observable<string> {
    return this.store.pipe(select(EditorSelectors.selectFilename));
  }

  public setFilename(filename: string) {
    this.store.dispatch(new EditorActions.SetFilenameAction(filename));
  }

  public getEditorGraph(): Observable<any | null> {
    return this.store.pipe(select(EditorSelectors.selectGraph));
  }

  public setEditorGraph(graphData: any | null) {
    this.store.dispatch(new EditorActions.SetEditorGraphAction(graphData));
  }

  public HasUnsaveChanges(): Observable<boolean> {
    return this.store.pipe(select(EditorSelectors.selectHasUnsavedChanges));
  }

  public downloadFile() {
    // toDo: error handling
    this.store.pipe(
      select(EditorSelectors.selectEditorState),
      take(1))
      .subscribe(state => {
        const blob = new Blob([state.value], {
          type: 'text/plain;charset=utf-8'
        });

        saveAs(blob, state.filename);
        this.store.dispatch(new EditorActions.ChangesSavedAction());
      });
  }

  public uploadFile(files: FileList): Promise<any> {
    console.log(files);
    if (files instanceof FileList && files.length > 0) {
      const reader = new FileReader();
      const file = files[0];
      reader.readAsBinaryString(file);
      return new Promise(resolve => {
        reader.onload = () => {
          this.store.dispatch(new EditorActions.UploadFileAction(reader.result.toString(), file.name));
          resolve();
        };
      });
    }
    return Promise.reject('could not load file');
  }
}
