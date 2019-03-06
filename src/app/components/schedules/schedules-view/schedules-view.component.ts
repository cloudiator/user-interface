import {Component, Input, OnInit} from '@angular/core';
import {ScheduleView} from '../../../model/ScheduleView';

@Component({
  selector: 'app-schedules-view',
  templateUrl: './schedules-view.component.html',
  styleUrls: ['./schedules-view.component.scss']
})
export class SchedulesViewComponent implements OnInit {

  @Input() scheduleView: ScheduleView;

  constructor() { }

  ngOnInit() {
  }

}
