import {Injectable} from '@angular/core';
import {Toast} from '../model/toast';
import {DialogService} from './dialog.service';
import {ToastComponent} from '../dialogs/toast/toast.component';
import {DialogRef} from '../model/dialogRef';
import {interval, Subscription} from 'rxjs';
import {environment} from '../../environments/environment';

/**
 * Handler for notifications. Currently only supports one notification at a time.
 */

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastRef: DialogRef = null;

  private countDownSubscription: Subscription = null;

  constructor(private dialogService: DialogService) {
  }

  public show(toast: Toast, timed = true) {

    if (this.toastRef) {
      this.toastRef.close();
    }

    this.toastRef = this.dialogService.open(ToastComponent, {data: toast});

    this.toastRef.afterClosed().subscribe(() => {
      this.toastRef = null;
      if (this.countDownSubscription) {
        this.countDownSubscription.unsubscribe();
        this.countDownSubscription = null;
      }
    });

    if (timed) {
      this.countDownSubscription = interval(environment.notificationDuration).subscribe(() => {
        this.toastRef.close();
      });
    }
  }
}
