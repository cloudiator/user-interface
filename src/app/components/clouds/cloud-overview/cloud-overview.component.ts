import {Component, OnDestroy, OnInit} from '@angular/core';
import {CloudDataService} from '../../../services/cloud-data.service';
import {Cloud} from '../../..';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cloud-overview',
  templateUrl: './cloud-overview.component.html',
  styleUrls: ['./cloud-overview.component.scss']
})
export class CloudOverviewComponent implements OnInit, OnDestroy {

  public clouds: Cloud[] = [];

  private subscriptions: Subscription[] = [];

  constructor(private cloudDataService: CloudDataService) {
  }

  ngOnInit() {

    const s0 = this.cloudDataService.findClouds().subscribe(clouds => {
      this.clouds = clouds;
      console.log(clouds);
    });

    this.subscriptions.push(s0);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
