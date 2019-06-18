import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {EditorService} from '../../../services/editor.service';
import {QueueStatus} from 'cloudiator-rest-api';
import {QueueDataService} from '../../../services/queue-data.service';

/**
 * View of the Node representation of the editor.
 * Currently only showing a complete/failed message after the queue object has finished.
 */
@Component({
  selector: 'app-node-graph',
  templateUrl: './node-graph.component.html',
  styleUrls: ['./node-graph.component.scss']
})
export class NodeGraphComponent implements OnInit, OnDestroy {

  /**
   * Status of queue, or empty string if not yet initialized.
   * @type {string}
   */
  public queueStatus: '' | QueueStatus = '';

  /**
   * Subscriptions of component.
   * @type {any[]}
   */
  private subscriptions: Subscription[] = [];

  /** @ignore **/
  constructor(public editorService: EditorService,
              private queueDataService: QueueDataService) {
  }

  /** @ignore */
  ngOnInit() {
    this.subscriptions.push(this.editorService.getEditorQueue().subscribe(queue => {
      this.queueStatus = !!queue ? queue.status : '';
    }));
  }

  /** @ignore */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
