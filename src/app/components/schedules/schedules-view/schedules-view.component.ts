import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ScheduleView} from '../../../model/ScheduleView';
import * as cytoscape from 'cytoscape';
import {ProcessDataService} from '../../../services/process-data.service';
import {DialogService} from '../../../app-dialog/services/dialog.service';
import {ToastService} from '../../../app-dialog/services/toast.service';
import {ToastType} from '../../../app-dialog/model/toast';
import {Router} from '@angular/router';
import {DeleteScheduleDialogComponent} from '../../../app-dialog/dialogs/delete-schedule-dialog/delete-schedule-dialog.component';
import {CloudiatorProcess} from 'cloudiator-rest-api/model/cloudiatorProcess';
import {Stylesheet} from 'cytoscape';
import Edge = cytoscape.Css.Edge;

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
  readonly style: any = [
    {
      'selector': 'node',
      'style': {
        'shape': 'ellipse',
        'width': '50',
        'height': '50',
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
        'background-blacken': '-0.2'
      }
    }, {
      'selector': 'edge',
      'style': {
        'curve-style': 'bezier',
        'opacity': '0.9',
        'line-color': '#92acbe',
        'width': '5px',
        'overlay-opacity': '0',
        'source-arrow-shape': 'triangle-backcurve',
        'source-arrow-color': '#92acbe'
      }
    }, {
      'selector': '.running',
      'style': {
        'background-color': 'hsl(141, 71%,  48%)',
        'text-outline-color': 'hsl(141, 71%,  48%)',
      }
    }, {
      'selector': '.pending',
      'style': {
        'background-color': 'hsl(48,  100%, 67%)',
        'text-outline-color': 'hsl(48,  100%, 67%)',
      }
    }, {
      'selector': '.error',
      'style': {
        'background-color': 'hsl(348, 100%, 61%)',
        'text-outline-color': 'hsl(348, 100%, 61%)'
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

  noData = true;

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
      this.cy.on('select', 'node', event => {
        const data = event.target._private.data;
        // find corresponding process of data
        const process = this.scheduleView.schedule.processes ?
          this.scheduleView.schedule.processes.find(p => p.id === data.id)
          : null;

        this.selected = {
          group: 'nodes',
          process: process,
          data: data
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
  constructor(private processDataService: ProcessDataService,
              private dialogSerivce: DialogService,
              private toastService: ToastService,
              private router: Router) {
  }

  /** @ignore */
  ngOnInit() {
  }

  /** @ignore */
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.scheduleView);
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
      .subscribe(graph => {
          // timeout as hack to fix wrong positioning of graph when data arrives to early in mobile view
          setTimeout(() => {
            this.noData = graph.nodes.length === 0;
            this.cy.remove(this.cy.$(() => true));
            this.cy.add(graph);
            this.cy.layout(this.circLayout).run();
            this.isLoading = false;
            this.cy.panBy({x: 0, y: -100});
            this.cy.elements('node').forEach(ele => {
              const state: CloudiatorProcess.StateEnum = ele._private.data.state;
              switch (state) {
                case 'PENDING':
                  ele.addClass('pending');
                  break;
                case 'ERROR':
                  ele.addClass('error');
                  break;
                case 'DELETED':
                  ele.addClass('deleted');
                  break;
                case 'FINISHED':
                  ele.addClass('finished');
                  break;
                case 'RUNNING':
                  ele.addClass('running');
                  break;
                default:
                  break;
              }
            });
          }, 0);
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  onDelete() {
    this.dialogSerivce.open(DeleteScheduleDialogComponent, {
      data: {
        scheduleName: this.scheduleView.job.name
      }
    })
      .afterClosed()
      .subscribe(confirmation => {
        if (confirmation) {
          this.processDataService.deleteSchedule(this.scheduleView.schedule.id)
            .subscribe(
              () => {
                this.router.navigateByUrl('/schedules');
              },
              err => {
                console.error(err);
                this.toastService.show({text: 'Could not delete Schedule', type: ToastType.DANGER});
              });
        }
      });
  }
}
