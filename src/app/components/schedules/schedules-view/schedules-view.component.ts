import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ScheduleView} from '../../../model/ScheduleView';
import {animate, animateChild, AnimationBuilder, group, query, state, style, transition, trigger} from '@angular/animations';
import * as cytoscape from 'cytoscape';
import {ProcessDataService} from '../../../services/process-data.service';
import {take} from 'rxjs/operators';
import {Change} from '@ngrx/store/schematics-core';

@Component({
  selector: 'app-schedules-view',
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
      transition('open => closed', [
        group([
          query('@buttonOpenClose', animateChild()),
          query('@headerOpenClose', animateChild()),
          animate('0.2s')])
      ]),
      transition('closed => open', [
        group([
          query('@buttonOpenClose', animateChild()),
          query('@headerOpenClose', animateChild()),
          animate('0.25s')])
      ])
    ]),
    trigger('buttonOpenClose', [
      state('closed', style(
        {
          transform: 'rotate(180deg)',
          color: 'white'
        })),
      state('open', style(
        {
          transform: 'rotate(0deg)',
          color: 'lightgray'
        })),
      transition('open => closed', [animate('0.20s')]),
      transition('closed => open', [animate('0.25s')])
    ]),
    trigger('headerOpenClose', [
      state('closed', style(
        {
          color: 'white'
        })),
      state('open', style(
        {
          color: 'black'
        })),
      transition('open => closed', [animate('0.20s')]),
      transition('closed => open', [animate('0.25s')])
    ])
  ],
  providers: [],
  templateUrl: './schedules-view.component.html',
  styleUrls: ['./schedules-view.component.scss']
})
export class SchedulesViewComponent implements OnInit, OnChanges {

  @Input() scheduleView: ScheduleView;

  isLoading = true;

  _selected = null;
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    if (value) {
      this.sheetOpenClose = 'open';
    } else {
      this.sheetOpenClose = 'closed';
    }
  }

  sheetOpenClose: 'open' | 'closed' = this.selected ? 'open' : 'closed';

  // y: number = 0;
  // startY: number = 0;

  readonly style = [{
    'selector': 'node',
    'style': {
      'width': '50%',
      'height': '50%',
      'content': 'data(name)',
      'font-size': '12px',
      'text-valign': 'center',
      'text-halign': 'center',
      'background-color': '#00447a',
      'text-outline-color': '#00447a',
      'text-outline-width': '1px',
      'text-wrap': 'wrap',
      'color': '#fff',
      'z-index': '10'
    }
  }, {
    'selector': 'node:selected',
    'style': {
      'background-color': 'lightgray',
      'text-outline-color': 'gray'
    }
  }, {
    'selector': 'edge',
    'style': {
      'opacity': '0.9',
      'line-color': '#92acbe',
      'width': '5px',
      'overlay-padding': '3px'
    }
  }, {
    'selector': 'edge:active',
    'style': {
      // 'line-color': 'white',
      // 'border-color': 'transparent'
    }
  }, {
    'selector': 'edge:selected',
    'style': {
      'line-color': 'lightgray'
    }
  }];

  readonly circLayout = {
    name: 'circle',
    fit: true,
    padding: 30,
    avoidOverlap: true,
    boundingBox: undefined,
    animate: false,
    counterclockwise: false,
    radius: 2,
    startAngle: 3 / 2 * Math.PI
  };

  readonly maxZoom = 2;
  readonly minZoom = 0.5;

  private _cy;
  get cy() {
    // setting up cy in getter, because onChanges seems to be called before onInit
    if (!this._cy) {
      this._cy = cytoscape({
        container: document.getElementById('cy'),
        style: this.style
      });
      this.cy.maxZoom(this.maxZoom);
      this.cy.minZoom(this.minZoom);
      this.cy.layout(this.circLayout).run();
      // this.cy.elements('node').forEach(ele => ele.ungrabify());
      this.cy.elements('node').forEach(ele => ele.selectify());
      this.cy.on('resize', () => {
        this.cy.center();
        this.cy.panBy({x: 0, y: -100});
      });
      this.cy.on('select', event => {
        this.selected = event.target._private.data;
      });
      this.cy.center();
    }

    return this._cy;
  }

  constructor(private processDataService: ProcessDataService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // make sure that graph is clear when no schedule view is selected, to prevent flickering on selection
    if (!this.scheduleView && this._cy) {
      this._cy.remove(this.cy.$(() => true));
      this.selected = null;
    }

    if (this.scheduleView) {
      this.selected = null;
      this.updategraph();
    }
  }

  // onPanStart(event: any): void {
  //   event.preventDefault();
  //   this.startY = this.y;
  // }
  //
  // onPan(event: any): void {
  //   event.preventDefault();
  //   this.y = this.startY + event.deltaY;
  // }

  switchOpenState() {
    this.sheetOpenClose = (this.sheetOpenClose === 'open') ? 'closed' : 'open';
  }

  onSheetClick() {

  }

  updategraph() {
    this.isLoading = true;
    this.processDataService.scheduleGraph(this.scheduleView.schedule.id)
      .pipe(take(1))
      .subscribe(graph => {
        // timeout as hack to fix wrong positioning of graph when data arrives to early in mobile view
        setTimeout(() => {
          this.cy.remove(this.cy.$(() => true));
          this.cy.add(graph);
          this.cy.layout(this.circLayout).run();
          this.isLoading = false;
          this.cy.panBy({x: 0, y: -100});
        }, 0);
      });
  }
}
