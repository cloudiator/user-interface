import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hardware} from 'cloudiator-rest-api';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ActivatedRoute} from '@angular/router';
import {OverviewTableComponent} from '../overview-table.component';

/**
 * Overview Component showing available Hardware.
 */
@Component({
  selector: 'app-hardware-overview',
  templateUrl: '../overview-table.component.html',
  styleUrls: ['../overview-table.component.scss']
})
export class HardwareOverviewComponent extends OverviewTableComponent<Hardware> implements OnInit, OnDestroy {

  /**
   * configures OverviewTableComponent
   * @param {ActivatedRoute} activatedRoute
   * @param {CloudDataService} cloudDataService
   */
  constructor(activatedRoute: ActivatedRoute,
              cloudDataService: CloudDataService) {
    super(activatedRoute, cloudDataService);
    this.title = 'Hardware';
    this.columns = {
      name: {value: 'Name'},
      cores: {value: 'Cores'},
      ram: {value: 'Ram'},
      disk: {value: 'Disk'},
      providerId: {value: 'ProviderId'}
    };
    this.initialSortKey = 'cores';
    this.isLoading$ = cloudDataService.hardwareIsLoading();
    this.filter = (v, t) => cloudDataService.filterHardware(v, t);

    this.data = cloudDataService.findHardware();

    this.fetchFn = () => cloudDataService.fetchHardware();
  }
}



