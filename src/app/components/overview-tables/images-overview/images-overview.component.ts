import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hardware, Image} from 'cloudiator-rest-api';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ActivatedRoute} from '@angular/router';
import {OverviewTableComponent} from '../overview-table.component';

/**
 * Overview of all Images available.
 */
@Component({
  selector: 'app-images-overview',
  templateUrl: '../overview-table.component.html',
  styleUrls: ['../overview-table.component.scss']
})
export class ImagesOverviewComponent extends OverviewTableComponent<Image> implements OnInit, OnDestroy {
  constructor(activatedRoute: ActivatedRoute,
              cloudDataService: CloudDataService) {
    super(activatedRoute, cloudDataService);
    this.title = 'Images';
    this.columns = {
      providerId: {value: 'provider ID'},
      name: {value: 'Name'},
      os: {
        value: 'OS',
        selectionFn: (v: Image) => v.operatingSystem ? v.operatingSystem.operatingSystemFamily : ''
      }
    };
    this.initialSortKey = '';
    this.isLoading$ = cloudDataService.imageIsLoading();
    this.filter = (v, t) => cloudDataService.filterImages(v, t);
    this.data = cloudDataService.findImages();
  }
}
