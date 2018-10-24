import {Component, OnInit} from '@angular/core';
import * as ace from 'brace';
import 'brace/mode/yaml';
import 'brace/theme/monokai';
import {Editor} from 'brace';
import saveAs from 'file-saver';

@Component({
  selector: 'app-yaml-editor',
  templateUrl: './yaml-editor.component.html',
  styleUrls: ['./yaml-editor.component.scss']
})
export class YamlEditorComponent implements OnInit {

  public editor: Editor;

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

  constructor() {
  }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.getSession().setMode('ace/mode/yaml');
    this.editor.setTheme(`ace/theme/${this.theme}`);
    this.editor.setOptions(this.options);
    this.editor.$blockScrolling = Infinity;
    this.editor.setValue([
      'sudo: required',
      'language: node_js',
      'node_js:',
      '- node'
    ].join('\n'));
    this.editor.clearSelection();
  }

  download() {
    const filename = 'task.yaml';

    const blob = new Blob([this.editor.getValue()], {
      type: 'text/plain;charset=utf-8'
    });

    saveAs(blob, filename);
  }

  onUploadChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsBinaryString(file);
      reader.onload = () => {
        this.editor.setValue(reader.result);
      };
    }
  }
}
