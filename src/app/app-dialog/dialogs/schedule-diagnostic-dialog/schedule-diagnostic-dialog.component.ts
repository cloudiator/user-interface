import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from '../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';
import {CloudiatorProcess} from 'cloudiator-rest-api';

@Component({
  selector: 'app-schedule-diagnostic-dialog',
  templateUrl: './schedule-diagnostic-dialog.component.html',
  styleUrls: ['./schedule-diagnostic-dialog.component.scss']
})
export class ScheduleDiagnosticDialogComponent implements OnInit {

  constructor(public dialogRef: DialogRef,
              @Inject(DIALOG_DATA) public data: CloudiatorProcess) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}
