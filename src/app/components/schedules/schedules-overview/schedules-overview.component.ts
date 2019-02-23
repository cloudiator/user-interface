import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProcessDataService} from '../../../services/process-data.service';
import {Subscription} from 'rxjs';
import {ScheduleView} from '../../../model/ScheduleView';

@Component({
  selector: 'app-schedules-overview',
  templateUrl: './schedules-overview.component.html',
  styleUrls: ['./schedules-overview.component.scss']
})
export class SchedulesOverviewComponent implements OnInit, OnDestroy {
  schedules: ScheduleView[] = [];

  private subscriptions: Subscription[] = [];

  constructor(public processDataService: ProcessDataService) {
  }

  ngOnInit() {
    // this.subscriptions.push(this.processDataService.getSchedules()
    //   .subscribe(schedules => {
    //     this.schedules = schedules;
    //   }));

    this.processDataService.getScheduleViews().subscribe(console.log);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
