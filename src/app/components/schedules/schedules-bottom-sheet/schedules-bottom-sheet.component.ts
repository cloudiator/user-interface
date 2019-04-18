import {Component, Input, OnInit} from '@angular/core';
import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-schedules-bottom-sheet',
  animations: [
    trigger('sheetOpenClose', [
      state('closed', style(
        {
          transform: 'translateY(16.5em)',
          backgroundColor: '#92acbe',
          color: 'white'
        })),
      state('open', style(
        {
          transform: '*',
          backgroundColor: '*',
          color: '*'
        })),
      state('hidden', style(
        {
          transform: 'translateY(20em)',
          backgroundColor: '#92acbe',
          color: 'white'
        })),
      transition('open => closed', [
        group([
          query('@buttonOpenClose', animateChild()),
          query('@headerOpenClose', animateChild()),
          animate('0.2s')])
      ]),
      transition('* => open', [
        group([
          query('@buttonOpenClose', animateChild()),
          query('@headerOpenClose', animateChild()),
          animate('0.25s')])
      ]),
      transition('open => hidden', [
        group([
          query('@buttonOpenClose', animateChild()),
          query('@headerOpenClose', animateChild()),
          animate('0.2s')])
      ])
    ]),
    trigger('buttonOpenClose', [
      state('closed, hidden', style(
        {
          transform: 'rotate(180deg)',
          color: 'white'
        })),
      state('open', style(
        {
          transform: 'rotate(0deg)',
          color: 'lightgray'
        })),
      transition('open => *', [animate('0.20s')]),
      transition('* => open', [animate('0.25s')])
    ]),
    trigger('headerOpenClose', [
      state('closed, hidden', style(
        {
          color: 'white'
        })),
      state('open', style(
        {
          color: 'black'
        })),
      transition('open => closed', [animate('0.20s')]),
      transition('open => hidden', [animate('0.20s')]),
      transition('* => open', [animate('0.25s')])
    ])
  ],
  templateUrl: './schedules-bottom-sheet.component.html',
  styleUrls: ['./schedules-bottom-sheet.component.scss']
})
export class SchedulesBottomSheetComponent implements OnInit {


  /**
   * selected node/edge of graph
   * @type {null}
   * @private
   */
  _selected: Selected = null;
  get selected(): Selected {
    return this._selected;
  }

  @Input() set selected(value: Selected) {
    this._selected = value;
    // open/hide bottomsheet depending if something is selected
    if (value) {
      this.sheetOpenClose = 'open';
    } else {
      this.sheetOpenClose = 'hidden';
    }
  }

  sheetOpenClose: 'open' | 'closed' | 'hidden' = this.selected ? 'open' : 'hidden';

  constructor() {
  }

  ngOnInit() {
  }


  switchOpenState() {
    this.sheetOpenClose = (this.sheetOpenClose === 'open') ? 'closed' : 'open';
  }

  onSheetClick() {

  }

}

export interface Selected {
  data: any;
  group: 'nodes' | 'edges';
}
