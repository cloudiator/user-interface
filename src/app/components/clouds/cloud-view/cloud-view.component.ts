import {Component, OnDestroy, OnInit} from '@angular/core';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Cloud} from '../../..';
import {Subscription} from 'rxjs';

/**
 * Represents the View of a Single Cloud
 */

@Component({
  selector: 'app-cloud-view',
  templateUrl: './cloud-view.component.html',
  styleUrls: ['./cloud-view.component.scss']
})
export class CloudViewComponent implements OnInit, OnDestroy {

  public cloud: Cloud;

  private subscriptions: Subscription[] = [];

  constructor(private cloudDataService: CloudDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // finds the corresponding cloud to the id that was given with this route
    this.route.paramMap
      .pipe(map(paramsMap => paramsMap.get('id')))
      .subscribe(id => this.subscriptions
        .push(this.cloudDataService.findCloud(id)
          .subscribe(cloud => this.cloud = cloud)))
      .unsubscribe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Triggers a delete request of this cloud.
   */
  public onDelete() {
    this.cloudDataService.deleteCloud(this.cloud.id);
  }
}
