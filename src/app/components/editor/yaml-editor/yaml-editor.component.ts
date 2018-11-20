import {Component, OnInit} from '@angular/core';
import * as ace from 'brace';
import 'brace/mode/yaml';
import 'brace/theme/monokai';
import {Editor} from 'brace';
import saveAs from 'file-saver';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromEditor from '../../../actions/editor.actions';
import {YamlDataService} from '../../../services/yaml-data-service';

@Component({
  selector: 'app-yaml-editor',
  templateUrl: './yaml-editor.component.html',
  styleUrls: ['./yaml-editor.component.scss']
})
export class YamlEditorComponent implements OnInit {

  public editor: Editor;

  private _filename: string;
  get filename(): string {
    return this._filename;
  }

  set filename(filename: string) {
    this.store.dispatch(new fromEditor.SetFilenameAction(filename));
    this._filename = filename;
  }

  public theme = 'monokai';

  private options: any = {
    showPrintMargin: false,
    showInvisibles: false,
    highlightGutterLine: false,
    highlightActiveLine: false,
    fadeFoldWidgets: true,
    showLineNumbers: true,
    fontSize: 16,
    wrap: false,
    mode: 'ace/mode/yaml'
  };

  constructor(private store: Store<fromRoot.State>,
              private yamlDataService: YamlDataService) {
  }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.getSession().setMode('ace/mode/yaml');
    this.editor.setTheme(`ace/theme/${this.theme}`);
    this.editor.setOptions(this.options);
    this.editor.$blockScrolling = Infinity;
    this.editor.clearSelection();
    this.editor.getSession().on('change', () => {
      this.store.dispatch(new fromEditor.SetValueAction(this.editor.getValue()));
    });


    this.store.pipe(select(fromRoot.getEditorValue)).subscribe(value => this.editor.setValue(value)).unsubscribe();
    this.store.pipe(select(fromRoot.getEditorFilename)).subscribe(filename => this._filename = filename).unsubscribe();
  }

  download() {
    const filename = this._filename;

    const blob = new Blob([this.editor.getValue()], {
      type: 'text/plain;charset=utf-8'
    });

    saveAs(blob, filename);
    this.store.dispatch(new fromEditor.ChangesSavedAction());
  }

  onUploadChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsBinaryString(file);
      reader.onload = () => {
        this.store.dispatch(new fromEditor.UploadFileAction(reader.result.toString(), file.name));
        this.editor.setValue(reader.result.toString());
        this._filename = file.name;
      };
    }
  }

  onValidate() {
    console.log('yaml sent');
    this.yamlDataService.parseYaml(this.editor.getValue()).subscribe(value => console.log(value));
  }
}
