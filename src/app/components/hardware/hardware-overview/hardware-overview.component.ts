import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {Hardware} from 'cloudiator-rest-api';
import {CloudDataService} from '../../../services/cloud-data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-hardware-overview',
  templateUrl: './hardware-overview.component.html',
  styleUrls: ['./hardware-overview.component.scss']
})
export class HardwareOverviewComponent implements OnInit {

  dataSource: BehaviorSubject<Hardware[]>;

  searchFormControl = new FormControl();

  sortKey = new BehaviorSubject<string>('');
  sortDirection = new BehaviorSubject<string>('');

  constructor(private cloudDataService: CloudDataService) {
  }

  ngOnInit() {

    combineLatest(this.cloudDataService.findHardware(), this.searchFormControl.valueChanges, this.sortKey, this.sortDirection)
      .subscribe(([changedHardwareData, searchTerm, sortKey, sortDirection]) => {
        const hardwareArray = Object.values(changedHardwareData);

        let filteredHardware = [];

        if (!searchTerm) {
          filteredHardware = hardwareArray;
        } else {
          filteredHardware = this.cloudDataService.filterHardware(hardwareArray, searchTerm);
        }

        const sortedHardware = filteredHardware.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) {
            return sortDirection === 'asc' ? 1 : -1;
          }
          if (a[sortKey] < b[sortKey]) {
            return sortDirection === 'asc' ? -1 : 1;
          }
          return 0;
        });

        this.dataSource.next(sortedHardware);
      });


    this.cloudDataService.findHardware().subscribe(hardware => {
      this.dataSource = new BehaviorSubject<Hardware[]>(hardware);
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



