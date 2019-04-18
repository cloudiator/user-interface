import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcessDataService} from '../../../services/process-data.service';
import {Subscription} from 'rxjs';
import {ScheduleView} from '../../../model/ScheduleView';
import {JobDataService} from '../../../services/job-data.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-schedules-overview',
  templateUrl: './schedules-overview.component.html',
  styleUrls: ['./schedules-overview.component.scss']
})
export class SchedulesOverviewComponent implements OnInit, OnDestroy {
  scheduleViews: ScheduleView[] = [];

  activeViewId: string = null;
  activeScheduleView: ScheduleView = null;

  /**
   * Subscriptions of findJob observables
   */
  private jobSubscriptions: Subscription[] = [];

  private subscriptions: Subscription[] = [];

  isLoading = false;
  jobLoad = false;

  constructor(private route: ActivatedRoute,
              public jobDataService: JobDataService,
              public processDataService: ProcessDataService,
              private router: Router) {
  }

  ngOnInit() {

    this.subscriptions.push(
      this.route.paramMap
        .pipe(
          map(paramsMap => paramsMap.get('id'))
        )
        .subscribe(id => {
          this.activeViewId = id;
          this.updateActiveScheduleView();
        })
    );

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

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  test() {
    console.log(this.scheduleViews);
  }

  private updateActiveScheduleView() {
    if (this.activeViewId) {
      this.activeScheduleView = this.scheduleViews.find(sv => sv.schedule.id === this.activeViewId);
      console.log(this.scheduleViews)
    }
  }
}
