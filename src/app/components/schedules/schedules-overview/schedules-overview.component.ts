import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcessDataService} from '../../../services/process-data.service';
import {Observable, Subscription} from 'rxjs';
import {ScheduleView} from '../../../model/ScheduleView';
import {JobDataService} from '../../../services/job-data.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

/**
 * Overview of Schedules. Hosts a list containing all Schedules and the SchedulesView.
 */
@Component({
  selector: 'app-schedules-overview',
  templateUrl: './schedules-overview.component.html',
  styleUrls: ['./schedules-overview.component.scss']
})
export class SchedulesOverviewComponent implements OnInit, OnDestroy {

  /**
   * list of all Scheduleviews.
   * @type {any[]}
   */
  scheduleViews: ScheduleView[] = [];

  /**
   * Id string of current active Schedule, obtained from the url
   * @type {null}
   */
  activeViewId: string = null;
  /**
   * actual active ScheduleView Object.
   * @type {null}
   */
  activeScheduleView: ScheduleView = null;

  /**
   * Subscriptions of findJob observables
   */
  private jobSubscriptions: Subscription[] = [];

  /**
   * all subscriptions of the site
   * @type {any[]}
   */
  private subscriptions: Subscription[] = [];

  /**
   * indicates load state of Schedules
   * @type {Observable<boolean>}
   */
  isLoading = this.processDataService.getScheduleIsLoading();

  /** @ignore */
  jobLoad = false;

  /** @ignore */
  constructor(private route: ActivatedRoute,
              public jobDataService: JobDataService,
              public processDataService: ProcessDataService,
              private router: Router) {
  }

  /** @ignore */
  ngOnInit() {

    this.subscriptions.push(
      this.route.queryParamMap
        .pipe(
          map(paramsMap => paramsMap.get('id') || undefined)
        )
        .subscribe(id => {
          this.activeViewId = id;
          this.updateActiveScheduleView();
        })
    );


    this.subscriptions.push(
      this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
          this.route.queryParamMap
            .pipe(
              map(paramsMap => paramsMap.get('id') || undefined)
            )
            .subscribe(id => {
              this.activeViewId = id;
              this.updateActiveScheduleView();
            });
        }
      })
    );

    // composing scheduleViews
    this.subscriptions.push(
      this.processDataService.getSchedules()
        .subscribe(schedules => {
          // map schedules to scheduleViews
          this.scheduleViews = schedules.map(sch => {
            return {
              schedule: sch,
              job: null
            };
          });

          // cleanup old findJob subscriptions
          this.jobSubscriptions.forEach(s => s.unsubscribe());

          // add new findJob subscriptions
          this.jobSubscriptions = this.scheduleViews.map(sv =>
            this.jobDataService.findJob(sv.schedule.job)
              .subscribe(job => {
                sv.job = job;
              })
          );

          this.updateActiveScheduleView();
        })
    );
  }

  /** @ignore */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.jobSubscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Updates the activeScheduleView porperty by finding the ScheduleView matching the activeViewId.
   */
  private updateActiveScheduleView() {
    if (this.activeViewId) {
      this.activeScheduleView = this.scheduleViews.find(sv => sv.schedule.id === this.activeViewId);
    } else {
      this.activeScheduleView = null;
    }
  }

}
