import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {Location} from 'cloudiator-rest-api';
import {FormControl} from '@angular/forms';
import {CloudDataService} from '../../../services/cloud-data.service';

@Component({
  selector: 'app-locations-overview',
  templateUrl: './locations-overview.component.html',
  styleUrls: ['./locations-overview.component.scss']
})
export class LocationsOverviewComponent implements OnInit {

  dataSource: BehaviorSubject<Location[]>;

  searchFormControl = new FormControl();

  sortKey = new BehaviorSubject<string>('');
  sortDirection = new BehaviorSubject<string>('');

  constructor(public cloudDataService: CloudDataService) {
  }

  ngOnInit() {

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


    this.cloudDataService.findLocations().subscribe(locations => {
      this.dataSource = new BehaviorSubject<Location[]>(locations);
      this.adjustSort('cores');
    });


    this.searchFormControl.setValue('');
  }

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
