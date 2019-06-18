import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {Location} from 'cloudiator-rest-api';
import {FormControl} from '@angular/forms';
import {CloudDataService} from '../../../services/cloud-data.service';

/**
 * Overview of all Locations available.
 */
@Component({
  selector: 'app-locations-overview',
  templateUrl: './locations-overview.component.html',
  styleUrls: ['./locations-overview.component.scss']
})
export class LocationsOverviewComponent implements OnInit {

  /**
   * Datasource for table.
   * @type {BehaviorSubject<Location[]>}
   */
  dataSource = new BehaviorSubject<Location[]>([]);

  /**
   * Search bar Object.
   * @type {FormControl}
   */
  searchFormControl = new FormControl();

  /**
   * Key the table is sorted by.
   * @type {BehaviorSubject<string>}
   */
  sortKey = new BehaviorSubject<string>('');
  /**
   * Direction of table sort.
   * @type {BehaviorSubject<string>}
   */
  sortDirection = new BehaviorSubject<string>('');

  /** @ignore */
  constructor(public cloudDataService: CloudDataService) {
  }

  /** @ignore */
  ngOnInit() {
    this.adjustSort('name');

    combineLatest(this.cloudDataService.findLocations(), this.searchFormControl.valueChanges, this.sortKey, this.sortDirection)
      .subscribe(([changedHardwareData, searchTerm, sortKey, sortDirection]) => {
        const locationsArray = Object.values(changedHardwareData);

        let filteredLocations = [];

        if (!searchTerm) {
          filteredLocations = locationsArray;
        } else {
          filteredLocations = this.cloudDataService.filterLocations(locationsArray, searchTerm);
        }

        const sortedLocations = filteredLocations.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) {
            return sortDirection === 'asc' ? 1 : -1;
          }
          if (a[sortKey] < b[sortKey]) {
            return sortDirection === 'asc' ? -1 : 1;
          }
          return 0;
        });

        this.dataSource.next(sortedLocations);
      });

    this.searchFormControl.setValue('');
  }

  /**
   * adjusts Sort key and direction.
   * @param {string} key
   */
  adjustSort(key: string) {
    if (this.sortKey.value === key) {
      if (this.sortDirection.value === 'asc') {
        this.sortDirection.next('desc');
      } else {
        this.sortDirection.next('asc');
      }
      return;
    }

    this.sortKey.next(key);
    this.sortDirection.next('asc');
  }
}
