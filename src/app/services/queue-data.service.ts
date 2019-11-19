import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as RuntimeConfigSelectors from '../root-store/runtime-config-store/selectors';
import {Queue, QueueService, QueueStatus} from 'cloudiator-rest-api';
import {EditorActions, RootStoreState} from '../root-store';
import {interval, Observable, of, Subject, Subscription} from 'rxjs';
import {mergeMap, takeUntil} from 'rxjs/operators';
import {ToastService} from '../app-dialog/services/toast.service';
import {ToastType} from '../app-dialog/model/toast';

/**
 * Service responsible for handling interactions with the Queue Api.
 */
@Injectable({
  providedIn: 'root'
})
export class QueueDataService {

  /**
   * how often the REST API should be polled when checking a queue status.
   * @type {number} Interval in milliseconds.
   */
  private readonly queuePollingInterval = 1000;

  /**
   * Subscription of the queueStatus interval.
   */
  private queueStatusSubscription: Subscription;

  /** @ignore */
  constructor(public queueApiService: QueueService,
              public store: Store<RootStoreState.State>,
              public toastService: ToastService) {
  }


  /**
   * Pulls the Queue for the given id from the Server.
   * @param {string} id
   * @return {Observable<Queue>}
   */
  public findQueuedTask(id: string): Observable<Queue> {
    return this.queueApiService.findQueuedTask(id, 'body');
  }

  /**
   * Repeatedly polls the queue task for the given id and returns it's status
   * @param {string} id of Queue to be polled.
   * @return {Observable<QueueStatus>} current status of Queue.
   */
  public listenToQueueTaskStatus(id: string) {
    // unsubscribe if old subscription exists
    if (this.queueStatusSubscription && !this.queueStatusSubscription.closed) {
      this.queueStatusSubscription.unsubscribe();
    }

    // cancel if id is empty
    if (!id) {
      return;
    }

    const destroy = new Subject<boolean>();
    // poll Server every second
    this.queueStatusSubscription =
      interval(this.queuePollingInterval)
        .pipe(
          takeUntil(destroy),
          mergeMap(() => this.findQueuedTask(id))
        ).subscribe((queue: Queue) => {
          this.store.dispatch(new EditorActions.SetEditorQueueAction(queue));
          // if queue finished, stop polling
          if (queue.status === 'COMPLETED' || queue.status === 'FAILED') {
            destroy.next(true);
          }
        },
        err => {
          console.error(err);
          this.toastService.show({text: 'Could not check Queue Status', type: ToastType.DANGER});
        });
  }
}
