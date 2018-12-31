import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from '../../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';
import {Toast} from '../../../model/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  toast: Toast;

  constructor(public dialogRef: DialogRef,
              @Inject(DIALOG_DATA)  public data: Toast) { }

  ngOnInit() {
    this.toast = this.data;
  }

}
