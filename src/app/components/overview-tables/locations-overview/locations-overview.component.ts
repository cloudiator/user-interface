import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {Image, Location} from 'cloudiator-rest-api';
import {FormControl} from '@angular/forms';
import {CloudDataService} from '../../../services/cloud-data.service';
import {OverviewTableComponent} from '../overview-table.component';
import {ActivatedRoute} from '@angular/router';

/**
 * Overview of all Locations available.
 */
@Component({
  selector: 'app-locations-overview',
  templateUrl: '../overview-table.component.html',
  styleUrls: ['../overview-table.component.scss']
})
export class LocationsOverviewComponent extends OverviewTableComponent<Location> implements OnInit, OnDestroy {
  constructor(activatedRoute: ActivatedRoute,
              cloudDataService: CloudDataService) {
    super(activatedRoute, cloudDataService);
    this.title = 'Locations';
    this.columns = {
      name: {
        value: 'Name'
      },
      country: {
        value: 'Country',
        selectionFn: (v: Location) => v.geoLocation ? v.geoLocation.country : ''
      },
      city: {
        value: 'City',
        selectionFn: (v: Location) => v.geoLocation ? v.geoLocation.city : ''
      }
    };
    this.initialSortKey = '';
    this.isLoading$ = cloudDataService.locationIsLoading();
    this.filter = (v, t) => cloudDataService.filterLocations(v, t);
    this.data = cloudDataService.findLocations();

    this.fetchFn = () => cloudDataService.fetchLocations();
  }
}
