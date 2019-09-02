import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditorService} from '../../../services/editor.service';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Job, QueueStatus} from 'cloudiator-rest-api';

/**
 * Enum representing TAbs of this view.
 * Order of values is detrimental to view representation.
 * firs value = most left, etc.
 */
export enum Tab {
  JOB,
  NODE
}

/**
 * TabView of the Graphs shown in the Yaml Editor.
 */
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

  /**
   * True if editor has a Job.
   * @type {boolean}
   */
  public isValid = false;

  public job: Job;

  /**
   * Status of the Editors Queue object. '' if the Queue is null.
   * @type {"" | QueueStatus}
   */
  public queueStatus: '' | QueueStatus = '';

  /**
   * Import of Tab enum.
   * @type {Tab}
   */
  public tab = Tab;

  /**
   * Currently selected Tab.
   * @type {Tab.JOB}
   */
  public currentTab: Tab = Tab.JOB;

  /**
   * All active Subscriptions of this Component/
   * @type {any[]}
   */
  private subscriptions: Subscription[] = [];

  /** @ignore */
  constructor(public editorService: EditorService) {
  }

  /** @ignore */
  ngOnInit() {
    this.subscriptions.push(this.editorService.getEditorJob().subscribe(job => {
      this.isValid = !!job;
      this.job = job;
    }));
    this.subscriptions.push(this.editorService.getEditorQueue().subscribe(queue =>
      this.queueStatus = queue ? queue.status : ''));
  }

  /** @ignore */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Sets currentTab.
   * @param {Tab} tab Tab to be switched to.
   */
  public switchTab(tab: Tab) {
    this.currentTab = tab;
  }

  /**
   * Determines if the given Tab is the currentTab.
   * @param tab {Tab} Tab to be determined.
   * @return {boolean} true if given Tab is currentTab.
   */
  public isTab(tab: Tab): boolean {
    return this.currentTab === tab;
  }

  /**
   * Determines the animation state for the given Tab.
   * @param tab {Tab} Tab to be determined.
   * @return Animation state of given Tab.
   */
  public tabAnimationState(tab: Tab): 'left' | 'right' | 'center' {
    if (tab < this.currentTab) {
      return 'left';
    }
    if (tab > this.currentTab) {
      return 'right';
    }
    return 'center';
  }
}
