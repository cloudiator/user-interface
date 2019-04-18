import {Injectable} from '@angular/core';
import {Toast} from '../model/toast';
import {DialogService} from './dialog.service';
import {ToastComponent} from '../dialogs/toast/toast.component';
import {DialogRef} from '../model/dialogRef';
import {interval, Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';

/**
 * Handler for notifications. Currently only supports one notification at a time.
 */
@Injectable()
export class ToastService {

  /**
   * reference to the currently shown Dialog.
   * @type {null}
   */
  private toastRef: DialogRef = null;

  /**
   * Subscription of the countdown obswervable that is used to time automatic notification close.
   * @type {null}
   */
  private countDownSubscription: Subscription = null;

  /** @ignore */
  constructor(private dialogService: DialogService) {
  }

  /**
   * Show a new Toast with the toast parameter as its configuration.
   * The timed parameter determines if the Notification will automatically dissapear after the configured timespan.
   * @param {Toast} toast
   * @param {boolean} timed
   */
  public show(toast: Toast, timed = true) {

    // close old toast if still active.
    if (this.toastRef) {
      this.toastRef.close();
    }

    this.toastRef = this.dialogService.open(ToastComponent, {data: toast});

    // add unsubscribe hook after toast is closed.
    this.toastRef.afterClosed().subscribe(() => {
      this.toastRef = null;
      if (this.countDownSubscription) {
        this.countDownSubscription.unsubscribe();
        this.countDownSubscription = null;
      }
    });

    // set up timer if needed.
    if (timed) {
      this.countDownSubscription = interval(environment.notificationDuration).subscribe(() => {
        this.toastRef.close();
      });
    }
  }
}
