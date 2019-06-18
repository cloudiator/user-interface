import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {ScheduleView} from '../../../model/ScheduleView';
import * as cytoscape from 'cytoscape';
import {ProcessDataService} from '../../../services/process-data.service';
import {take} from 'rxjs/operators';

/**
 * View of a selected Schedule, containing a Cytoscape and a bottomsheet for further information
 */
@Component({
  selector: 'app-schedules-view',
  providers: [],
  templateUrl: './schedules-view.component.html',
  styleUrls: ['./schedules-view.component.scss']
})
export class SchedulesViewComponent implements OnInit, OnChanges {

  /**
   * ScheduleView to be shown.
   */
  @Input() scheduleView: ScheduleView;

  /**
   * Indicates if graph data is still being requested.
   * @type {boolean}
   */
  isLoading = true;

  /**
   * Current selected Node.
   * @type {null}
   */
  selected: any = null;

  // y: number = 0;
  // startY: number = 0;

  /**
   * Style of graph.
   */
  readonly style = [{
    'selector': 'node',
    'style': {
      'width': '50%',
      'height': '50%',
      'content': 'data(task)',
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

  /**
   * Graph Sorter.
   */
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

  /**
   * Max zoom limiter of graph.
   * @type {number}
   */
  readonly maxZoom = 2;
  /**
   * Min zoom limiter of graph.
   * @type {number}
   */
  readonly minZoom = 0.5;

  /**
   * Cytoscape object
   */
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
      this.cy.on('select', 'edge', event => {
        const target = event.target._private;
        this.selected = {
          group: 'edges',
          data: {
            id: target.data.id,
            source: target.source._private.data,
            target: target.target._private.data
          }
        };
      });
      this.cy.on('select', 'node', event => {
        this.selected = {
          group: 'nodes',
          data: event.target._private.data
        };
      });
      this.cy.on('unselect', () => {
        this.selected = null;
      });
      this.cy.center();
    }

    return this._cy;
  }

  /** @ignore */
  constructor(private processDataService: ProcessDataService) {
  }

  /** @ignore */
  ngOnInit() {
  }

  /** @ignore */
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

  /**
   * requests new Schedule graph and updates the graph View.
   */
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
        },
        () => {
          this.isLoading = false;
        }
      );
  }
}
