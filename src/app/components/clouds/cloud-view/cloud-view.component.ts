import {Component, OnDestroy, OnInit} from '@angular/core';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cloud, Hardware, Image} from 'cloudiator-rest-api';
import {BehaviorSubject, Subscription} from 'rxjs';
import {DialogService} from '../../../app-dialog/services/dialog.service';
import {DeleteCloudDialogComponent} from '../../../app-dialog/dialogs/delete-cloud-dialog/delete-cloud-dialog.component';
import {map, take} from 'rxjs/operators';

/**
 * Represents the View of a Single Cloud
 */
@Component({
  selector: 'app-cloud-view',
  templateUrl: './cloud-view.component.html',
  styleUrls: ['./cloud-view.component.scss']
})
export class CloudViewComponent implements OnInit, OnDestroy {

  /**
   * Datasource for Hardware Table.
   */
  hardwareDataSource: BehaviorSubject<Hardware[]>;
  /**
   * DAtasource for Images Table.
   */
  imagesDataSource: BehaviorSubject<Image[]>;

  /**
   * Cloud that is presented.
   */
  public cloud: Cloud;

  /**
   *  all subscriptions of this component.
   * @type {any[]}
   */
  private subscriptions: Subscription[] = [];

  /** @ignore */
  constructor(private cloudDataService: CloudDataService,
              private route: ActivatedRoute,
              private dialogService: DialogService,
              private router: Router) {
  }

  /** @ignore */
  ngOnInit() {
    // finds the corresponding cloud to the id that was given with this route
    this.route.paramMap
      .pipe(
        take(1),
        map(paramsMap => paramsMap.get('id')))
      .subscribe(id => this.subscriptions
        .push(this.cloudDataService.findCloud(id)
          .subscribe(cloud => {
            this.cloud = cloud;
            if (cloud) {
              // find hardware and image information for given Cloud
              this.subscriptions.push(
                this.cloudDataService.findHardware(cloud.id).subscribe(hardware =>
                  this.hardwareDataSource = new BehaviorSubject<Hardware[]>(hardware)),
                this.cloudDataService.findImages(cloud.id).subscribe(images =>
                  this.imagesDataSource = new BehaviorSubject<Image[]>(images))
              );
            }
          })));
  }

  /** @ignore */
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
