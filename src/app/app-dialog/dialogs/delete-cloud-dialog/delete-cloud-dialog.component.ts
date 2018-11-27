import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from '../../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';

@Component({
  selector: 'app-delete-cloud-dialog',
  templateUrl: './delete-cloud-dialog.component.html',
  styleUrls: ['./delete-cloud-dialog.component.scss']
})
export class DeleteCloudDialogComponent implements OnInit {

  constructor(public dialogRef: DialogRef,
              @Inject(DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public onClose(result = false) {
    this.dialogRef.close(result);
  }
}
