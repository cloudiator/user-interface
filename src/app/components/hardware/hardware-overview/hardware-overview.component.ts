import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Subscription} from 'rxjs';
import {Hardware} from 'cloudiator-rest-api';
import {CloudDataService} from '../../../services/cloud-data.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hardware-overview',
  templateUrl: './hardware-overview.component.html',
  styleUrls: ['./hardware-overview.component.scss']
})
export class HardwareOverviewComponent implements OnInit, OnDestroy {

  dataSource = new BehaviorSubject<Hardware[]>([]);

  searchFormControl = new FormControl();

  sortKey = new BehaviorSubject<string>('');
  sortDirection = new BehaviorSubject<string>('');

  subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public cloudDataService: CloudDataService) {
  }

  ngOnInit() {
    this.adjustSort('cores');

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

    this.searchFormControl.setValue('');


    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id) {
        this.searchFormControl.patchValue(`id=${params.id}`);
      } else if (params.cloud) {
        this.searchFormControl.patchValue(`cloud=${params.cloud}`);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
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



