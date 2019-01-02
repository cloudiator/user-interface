import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {EditorService} from '../../../services/editor.service';

@Component({
  selector: 'app-node-graph',
  templateUrl: './node-graph.component.html',
  styleUrls: ['./node-graph.component.scss']
})
export class NodeGraphComponent implements OnInit, OnDestroy {

  public isScheduled = false;

  private subscriptions: Subscription[] = [];

  constructor(private editorService: EditorService) { }

  ngOnInit() {
    this.subscriptions.push(this.editorService.getEditorQueue().subscribe(queue => this.isScheduled = !! queue));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
