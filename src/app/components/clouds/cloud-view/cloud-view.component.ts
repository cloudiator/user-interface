import {Component, OnDestroy, OnInit} from '@angular/core';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Cloud} from '../../..';
import {Subscription} from 'rxjs';
import {DialogService} from '../../../services/dialog.service';
import {DeleteCloudDialogComponent} from '../../../dialogs/delete-cloud-dialog/delete-cloud-dialog.component';

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
              private route: ActivatedRoute,
              private dialogService: DialogService,
              private router: Router) {
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
   * Triggers confirmation dialog and sends a cloud delete request if accepted.
   */
  public onDelete() {

    const dialogRef = this.dialogService.open(DeleteCloudDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      this.cloudDataService.deleteCloud(this.cloud.id);
      this.router.navigateByUrl('/clouds');
      }
    });
  }
}
