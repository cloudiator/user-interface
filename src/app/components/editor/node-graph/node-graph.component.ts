import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {EditorService} from '../../../services/editor.service';
import {QueueService, QueueStatus} from 'cloudiator-rest-api';
import {QueueDataService} from '../../../services/queue-data.service';
import {takeUntil} from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-node-graph',
  templateUrl: './node-graph.component.html',
  styleUrls: ['./node-graph.component.scss']
})
export class NodeGraphComponent implements OnInit, OnDestroy {

  public queueStatus: '' | QueueStatus = '';

  private subscriptions: Subscription[] = [];

  constructor(private editorService: EditorService,
              private queueDataService: QueueDataService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.editorService.getEditorQueue().subscribe(queue => {
      this.queueStatus = !!queue ? queue.status : '';
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
