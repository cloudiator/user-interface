import {Component, OnDestroy, OnInit} from '@angular/core';
import {CloudDataService} from '../../../services/cloud-data.service';
import {Cloud} from 'cloudiator-rest-api';
import {Observable, Subscription} from 'rxjs';
import {map, take, takeUntil, takeWhile, tap} from 'rxjs/operators';

/**
 * Overview of all clouds given as a set of horizontally flowing cards.
 */
@Component({
  selector: 'app-cloud-overview',
  templateUrl: './cloud-overview.component.html',
  styleUrls: ['./cloud-overview.component.scss']
})
export class CloudOverviewComponent implements OnInit, OnDestroy {

  /**
   * Array of all Clouds.
   * @type {any[]}
   */
  public clouds: Cloud[] = [];

  public cloudIsLoading$: Observable<boolean> = this.cloudDataService.cloudIsLoading();

  /**
   * All Subscriptions of this Component.
   * @type {any[]}
   */
  private subscriptions: Subscription[] = [];

  /** @ignore */
  constructor(private cloudDataService: CloudDataService) {
  }

  /** @ignore */
  ngOnInit() {

    const s0 = this.cloudDataService.findClouds().subscribe(clouds => {
      this.clouds = clouds;
    });

    this.subscriptions.push(s0);
  }

  /** @ignore */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
