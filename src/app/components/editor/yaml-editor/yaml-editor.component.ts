import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import * as ace from 'brace';
import {Editor} from 'brace';
import 'brace/mode/yaml';
import 'brace/theme/monokai';
import {YamlDataService} from '../../../services/yaml-data.service';
import {ToastService} from '../../../app-dialog/services/toast.service';
import {ToastType} from '../../../app-dialog/model/toast';
import {JobDataService} from '../../../services/job-data.service';
import {EditorService} from '../../../services/editor.service';
import {take} from 'rxjs/operators';
import {ProcessDataService} from '../../../services/process-data.service';
import {Subscription} from 'rxjs';

/**
 * Main View of the Editor View, Hosting the editor and the Graph View.
 */
@Component({
  selector: 'app-yaml-editor',
  templateUrl: './yaml-editor.component.html',
  styleUrls: ['./yaml-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class YamlEditorComponent implements OnInit, OnDestroy {

  /**
   * Ace editor instance.
   */
  public editor: Editor;

  /**
   * name of current selected file.
   */
  private _filename: string;
  get filename(): string {
    return this._filename;
  }

  set filename(filename: string) {
    this.editorService.setFilename(filename);
    this._filename = filename;
  }

  /**
   * Indicates if a validation request is currently being made.
   * @type {boolean}
   */
  public isValidating = false;
  /**
   * Indicates if yaml was successfully validated.
   * @type {boolean}
   */
  public isValid = false;
  /**
   * Indicates if the generated Job is currently being submitted to the process api.
   * @type {boolean}
   */
  public isSubmitting = false;

  /**
   * Ace editor theme
   * @type {string}
   */
  public theme = 'monokai';

  /**
   * Overall ace setting.
   */
  private options: any = {
    showPrintMargin: false,
    showInvisibles: false,
    highlightGutterLine: false,
    highlightActiveLine: false,
    fadeFoldWidgets: true,
    showLineNumbers: true,
    fontSize: 14,
    tabSize: 2,
    wrap: true,
    mode: 'ace/mode/yaml'
  };

  /**
   * Subscriptions of this component.
   * @type {any[]}
   */
  private subscriptions: Subscription[] = [];

  /** @ignore */
  constructor(public editorService: EditorService,
              public jobDataService: JobDataService,
              public processDataService: ProcessDataService,
              public toastService: ToastService,
              public yamlDataService: YamlDataService) {
  }

  /** @ignore */
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

    // Set is valid if EditorJob is not null
    this.subscriptions.push(this.editorService.getEditorJob().subscribe(job => this.isValid = !!job));
  }

  /** @ignore */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * triggers download of editor file.
   */
  onDownload() {
    this.editorService.downloadFile();
  }

  /**
   * updates redux store if new file is uploaded.
   * @param event
   */
  onUploadChange(event) {
    this.editorService.uploadFile(event.target.files)
      .then(() => {
        this.editorService.getEditorValue().pipe(take(1)).subscribe(value => this.editor.setValue(value));
        this.editorService.getFilename().pipe(take(1)).subscribe(filename => this._filename = filename);
      })
      .catch();
  }

  /**
   * Sends a new validation request to the api and saves the returned Job into the Redux store if successfull.
   */
  onValidate() {
    this.isValidating = true;
    this.yamlDataService.parseYaml(this.editor.getValue())
      .pipe(take(1))
      .subscribe(job => {
          // job is valid and stored
          this.editorService.setEditorJob(job);
          this.editorService.setEditorQueue(null);
          this.isValidating = false;
        },
        err => {
          this.isValidating = false;
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

  /**
   * Submites the Current Job and saves the returned Queue to the Redux store.
   */
  onSubmit() {
    this.isSubmitting = true;
    this.processDataService.submitEditorSchedule()
      .pipe(take(1))
      .subscribe(queue => {
      this.editorService.setEditorQueue(queue);
      this.isSubmitting = false;
    },
    err => {
      this.isSubmitting = false;
      this.toastService.show({text: 'Unexpected Error', type: ToastType.DANGER}, true);
    });
  }
}
