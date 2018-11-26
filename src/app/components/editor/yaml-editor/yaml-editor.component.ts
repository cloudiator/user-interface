import {Component, OnInit} from '@angular/core';
import * as ace from 'brace';
import {Editor} from 'brace';
import 'brace/mode/yaml';
import 'brace/theme/monokai';
import {YamlDataService} from '../../../services/yaml-data.service';
import {ToastService} from '../../../services/toast.service';
import {ToastType} from '../../../model/toast';
import {JobDataService} from '../../../services/job-data.service';
import {EditorService} from '../../../services/editor.service';
import {take} from 'rxjs/operators';

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
    this.editorService.setFilename(filename);
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

  constructor(public editorService: EditorService,
              public jobDataService: JobDataService,
              public toastService: ToastService,
              public yamlDataService: YamlDataService) {
  }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.getSession().setMode('ace/mode/yaml');
    this.editor.setTheme(`ace/theme/${this.theme}`);
    this.editor.setOptions(this.options);
    this.editor.$blockScrolling = Infinity;
    this.editor.clearSelection();
    this.editor.getSession().on('change', () => {
      this.editorService.setEditorValue(this.editor.getValue());
    });


    this.editorService.getEditorValue().pipe(take(1)).subscribe(value => this.editor.setValue(value));
    this.editorService.getFilename().pipe(take(1)).subscribe(filename => this._filename = filename);
  }

  onDownload() {
    this.editorService.downloadFile();
  }

  onUploadChange(event) {
    this.editorService.uploadFile(event.target.files)
      .then(() => {
        this.editorService.getEditorValue().pipe(take(1)).subscribe(value => this.editor.setValue(value));
        this.editorService.getFilename().pipe(take(1)).subscribe(filename => this._filename = filename);
      })
      .catch();
  }

  onValidate() {
    this.yamlDataService.parseYaml(this.editor.getValue())
      .pipe(take(1))
      .subscribe(job => {
          // job is valid and graph is queried
          this.jobDataService.jobGraph(job.id).subscribe(graph =>
            this.editorService.setEditorGraph(graph));
        },
        err => {
          if (err.status) {
            switch (err.status) {
              case 400:
                this.toastService.show({text: 'Invalid YAML', type: ToastType.DANGER}, true);
                break;
              default:
                this.toastService.show({text: 'Unexpected Error', type: ToastType.DANGER}, true);
            }
          } else {
            this.toastService.show({text: 'Unexpected Error', type: ToastType.DANGER}, true);
          }
        });
  }
}
