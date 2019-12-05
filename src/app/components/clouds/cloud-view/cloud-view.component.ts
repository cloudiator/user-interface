import {Component, OnDestroy, OnInit} from '@angular/core';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cloud, Hardware, Image, Location} from 'cloudiator-rest-api';
import {BehaviorSubject, Subscription} from 'rxjs';
import {DialogService} from '../../../app-dialog/services/dialog.service';
import {DeleteCloudDialogComponent} from '../../../app-dialog/dialogs';
import {distinctUntilChanged, filter, map, take} from 'rxjs/operators';

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
   * Observable saying whether hardware is loading right now.
   * @type {Observable<boolean>}
   */
  hardwareIsLoading$ = this.cloudDataService.hardwareIsLoading();

  /**
   * Datasource for Images Table.
   */
  imagesDataSource: BehaviorSubject<Image[]>;

  /**
   * Observable saying whether images are loading right now.
   * @type {Observable<boolean>}
   */
  imageIsLoading$ = this.cloudDataService.imageIsLoading();

  /**
   * Datasource for Locations Table.
   */
  locationDataSource: BehaviorSubject<Location[]>;

  /**
   * Observable saying whether locations are loading right now.
   * @type {Observable<boolean>}
   */
  locationIsLoading$ = this.cloudDataService.locationIsLoading();

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
        map(paramsMap => paramsMap.get('id')),
        filter(p => p !== undefined)
      )
      .subscribe(id =>
        this.subscriptions
          .push(this.cloudDataService.findCloud(id)
            .pipe(distinctUntilChanged())
            .subscribe(cloud => {
              this.cloud = cloud;
              if (cloud) {
                // find hardware, image and location information for given Cloud
                this.subscriptions.push(
                  this.cloudDataService.findHardware(cloud.id).subscribe(hardware =>
                    this.hardwareDataSource = new BehaviorSubject<Hardware[]>(hardware)),
                  this.cloudDataService.findImages(cloud.id).subscribe(images =>
                    this.imagesDataSource = new BehaviorSubject<Image[]>(images)),
                  this.cloudDataService.findLocations(cloud.id).subscribe(locations =>
                    this.locationDataSource = new BehaviorSubject<Location[]>(locations))
                );
              }
            })
          )
      );
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
        this.cloudDataService.deleteCloud(this.cloud.id).subscribe(
          () => {
            this.router.navigateByUrl('/clouds');
          },
          () => {
          }
        );
      }
    });
  }

  /**
   * Decides which Cloud image is to be shown.
   * @param name
   * @return {string | boolean}
   */
  backgroundSelector(name) {
    if (!this.cloud) {
      return 'default';
    }
    switch (this.cloud.api.providerName) {
      case 'aws-ec2':
        return name === 'aws';
      case 'openstack4j':
      case 'openstack-nova':
        return name === 'openstack';
      case 'google-compute-engine':
        return name === 'gcp';
      default:
        return name === 'default';
    }
  }
}
