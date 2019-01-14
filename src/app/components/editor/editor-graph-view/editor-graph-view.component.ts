import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditorService} from '../../../services/editor.service';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {filter} from 'rxjs/operators';

export enum Tab {
  JOB,
  NODE
}

@Component({
  selector: 'app-editor-graph-view',
  animations: [
    trigger('slide', [
      state('left', style({transform: 'translateX(-100%)'})),
      state('right', style({transform: 'translateX(100%)'})),
      state('center', style({transform: 'translateX(0%)'})),
      transition('left => center', [animate('0.25s')]),
      transition('right => center', [animate('0.25s')]),
      transition('center => left', [animate('0.25s')]),
      transition('center => right', [animate('0.25s')]),
    ]),
    trigger('tabEnterAnimation', [
      transition(':enter', [
        style({
          flexGrow: 0.00001
        }),
        animate('0.2s', style({
          flexGrow: 1
        }))
      ]),
      transition(':leave', [
        style({
          flexGrow: 1
}),
        animate('0.2s', style({
          flexGrow: 0.00001
        }))
      ]),
    ])
  ],
  templateUrl: './editor-graph-view.component.html',
  styleUrls: ['./editor-graph-view.component.scss']
})
export class EditorGraphViewComponent implements OnInit, OnDestroy {

  public isValid = false;
  public isScheduled = false;

  public tab = Tab;

  public currentTab: Tab = Tab.JOB;

  private subscriptions: Subscription[] = [];

  constructor(private editorService: EditorService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.editorService.getEditorJob().subscribe(job => this.isValid = !!job));
    this.subscriptions.push(this.editorService.getEditorQueue().subscribe(queue => this.isScheduled = !!queue));
    this.subscriptions.push(this.editorService.getEditorQueue().subscribe(queue => console.log(queue)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public switchTab(tab: Tab) {
    this.currentTab = tab;
  }

  public isTab(tab: Tab): boolean {
    return this.currentTab === tab;
  }

  public tabAnimationState(tab: Tab): string {
    if (tab < this.currentTab) {
      return 'left';
    }
    if (tab > this.currentTab) {
      return 'right';
    }
    return 'center';
  }
}
