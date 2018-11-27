import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from '../../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';

@Component({
  selector: 'app-confirm-new-cloud-dialog',
  templateUrl: './confirm-new-cloud-dialog.component.html',
  styleUrls: ['./confirm-new-cloud-dialog.component.scss']
})
export class ConfirmNewCloudDialogComponent implements OnInit {

  constructor(public dialogRef: DialogRef,
              @Inject(DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  public onClose(result = false) {
    this.dialogRef.close(result);
  }
}
