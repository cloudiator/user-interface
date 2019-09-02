import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from '../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';

@Component({
  selector: 'app-delete-schedule-dialog',
  templateUrl: './delete-schedule-dialog.component.html',
  styleUrls: ['./delete-schedule-dialog.component.scss']
})
export class DeleteScheduleDialogComponent implements OnInit {

  public scheduleName: string;

  constructor(public dialogRef: DialogRef,
              @Inject(DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.scheduleName = this.data.scheduleName;
  }

  public onClose(result = false) {
    this.dialogRef.close(result);
  }
}
