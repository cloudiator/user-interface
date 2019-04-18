import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as RuntimeConfigSelectors from '../root-store/runtime-config-store/selectors';
import {Queue, QueueService, QueueStatus} from 'cloudiator-rest-api';
import {EditorActions, RootStoreState} from '../root-store';
import {interval, Observable, of, Subject, Subscription} from 'rxjs';
import {mergeMap, takeUntil} from 'rxjs/operators';
import {ToastService} from '../app-dialog/services/toast.service';
import {ToastType} from '../model/toast';

/**
 * Service responsible for handling interactions with the Queue Api.
 */
@Injectable({
  providedIn: 'root'
})
export class QueueDataService {

  /**
   * Subscription of the queueStatus interval.
   */
  private queueStatusSubscription: Subscription;

  /** @ignore */
  constructor(public queueApiService: QueueService,
              public store: Store<RootStoreState.State>,
              public toastService: ToastService) {
    // Sets queueService settings according to RuntimeConfig.
    store.pipe(select(RuntimeConfigSelectors.selectConfig)).subscribe(config => {
      queueApiService.basePath = config.apiPath;
      if (queueApiService.configuration) {
        queueApiService.configuration.apiKeys['X-API-Key'] = config.xApiKey;
      }
    });
  }


  /**
   * Pulls the Queue for the given id from the Server.
   * @param {string} id
   * @return {Observable<Queue>}
   */
  public findQueuedTask(id: string): Observable<Queue> {
    return this.queueApiService.findQueuedTask(id, 'body');
  }


  public bol = false;
  private obs: Observable<Queue> = of(<Queue>{status: 'FAILED'});

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

    this.bol = false;

    const destroy = new Subject<boolean>();
    // poll Server every second
    this.queueStatusSubscription =
      interval(1000).pipe(
        takeUntil(destroy),
        mergeMap(() => this.bol ? this.obs : this.findQueuedTask(id))
      ).subscribe((queue: Queue) => {
          this.store.dispatch(new EditorActions.SetEditorQueueAction(queue));
          // if queue finished, stop polling
          if (queue.status === 'COMPLETED' || queue.status === 'FAILED') {
            destroy.next(true);
          }
        },
        err => {
          this.toastService.show({text: 'Could not check Queue Status', type: ToastType.DANGER});
        });
  }
}
