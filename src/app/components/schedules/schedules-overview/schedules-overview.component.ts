import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcessDataService} from '../../../services/process-data.service';
import {Subscription} from 'rxjs';
import {ScheduleView} from '../../../model/ScheduleView';
import {JobDataService} from '../../../services/job-data.service';
import {takeUntil} from 'rxjs/operators';
import {set} from '../../../lodashUtils';
import * as _ from 'lodash';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-schedules-overview',
  templateUrl: './schedules-overview.component.html',
  styleUrls: ['./schedules-overview.component.scss']
})
export class SchedulesOverviewComponent implements OnInit, OnDestroy {
  scheduleViews: ScheduleView[] = [];

  /**
   * Subscriptions of findJob observables
   */
  private jobSubscriptions: Subscription[] = [];

  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              public jobDataService: JobDataService,
              public processDataService: ProcessDataService,
              private router: Router) {
  }

  ngOnInit() {

    this.subscriptions.push(
      this.processDataService.getSchedules().subscribe(schedules => {
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
            .subscribe(job => sv.job = job)
        );
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  test() {
    console.log(this.scheduleViews);
  }
}
