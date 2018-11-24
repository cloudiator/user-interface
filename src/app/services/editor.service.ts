import {Injectable} from '@angular/core';
import * as fromRoot from '../reducers';
import * as fromEditor from '../actions/editor.actions';
import {select, Store} from '@ngrx/store';
import saveAs from 'file-saver';
import {Observable} from 'rxjs';
import {reject} from 'q';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private store: Store<fromRoot.State>) {
  }

  public getEditorValue(): Observable<string> {
    return this.store.pipe(select(fromRoot.getEditorValue));
  }

  public setEditorValue(value: string) {
    this.store.dispatch(new fromEditor.SetValueAction(value));
  }

  public getFilename(): Observable<string> {
    return this.store.pipe(select(fromRoot.getEditorFilename));
  }

  public setFilename(filename: string) {
    this.store.dispatch(new fromEditor.SetFilenameAction(filename));
  }

  public getEditorGraph(): Observable<any | null> {
    return this.store.pipe(select(fromRoot.getEditorGraph));
  }

  public setEditorGraph(graphData: any | null) {
    this.store.dispatch(new fromEditor.SetEditorGraphAction(graphData));
  }

  public HasUnsaveChanges(): Observable<boolean> {
    return this.store.pipe(select(fromRoot.editorHasUnsavedChanges));
  }

  public downloadFile() {
    this.store.pipe(
      select(fromRoot.editorState),
      take(1))
      .subscribe(state => {
        const blob = new Blob([state.value], {
          type: 'text/plain;charset=utf-8'
        });

        saveAs(blob, state.filename);
        this.store.dispatch(new fromEditor.ChangesSavedAction());
      });
  }

  public uploadFile(files: FileList): Promise<any> {
    const reader = new FileReader();
    if (files && files.length > 0) {
      const file = files[0];
      reader.readAsBinaryString(file);
      return new Promise(resolve => {
        reader.onload = () => {
          this.store.dispatch(new fromEditor.UploadFileAction(reader.result.toString(), file.name));
          resolve();
        };
      });
    }
    return new Promise(() => reject());
  }
}
