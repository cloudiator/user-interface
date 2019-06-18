import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of, Subscription} from 'rxjs';
import {Hardware} from 'cloudiator-rest-api';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CloudDataService} from '../../services/cloud-data.service';
import {TableColumns} from '../../model/TableColumns';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss']
})
export class OverviewTableComponent<T> implements OnInit, OnDestroy {
  title = '';

  columns: TableColumns;
  columnFields: string[];

  initialSortKey: string;

  isLoading$: Observable<boolean> = of(false);

  filter: (data: T[], searchTerm: string) => T[];

  data: Observable<T[]> = of([]);

  /**
   * Datasource for table.
   * @type {BehaviorSubject<Hardware[]>}
   */
  protected dataSource = new BehaviorSubject<T[]>([]);

  /**
   * Search bar Object.
   * @type {FormControl}
   */
  protected searchFormControl = new FormControl();

  /**
   * Key the table is sorted by.
   * @type {BehaviorSubject<string>}
   */
  protected sortKey = new BehaviorSubject<string>('');
  /**
   * Sort Direction.
   * @type {BehaviorSubject<string>}
   */
  protected sortDirection = new BehaviorSubject<string>('');

  /**
   * Subscriptions of this Components.
   * @type {any[]}
   */
  protected subscriptions: Subscription[] = [];

  /** @ignore */
  constructor(private activatedRoute: ActivatedRoute,
              public cloudDataService: CloudDataService) {
  }

  /** @ignore */
  ngOnInit() {
    this.columnFields = this.columns ? Object.keys(this.columns) : [];

    this.adjustSort(this.initialSortKey);

    combineLatest(this.data, this.searchFormControl.valueChanges, this.sortKey, this.sortDirection)
      .subscribe(([changedData, searchTerm, sortKey, sortDirection]) => {
        const dataArray = Object.values(changedData);

        let filteredData = [];

        if (!searchTerm) {
          filteredData = dataArray;
        } else {
          filteredData = this.filter(dataArray, searchTerm);
        }

        const sortedData = filteredData.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) {
            return sortDirection === 'asc' ? 1 : -1;
          }
          if (a[sortKey] < b[sortKey]) {
            return sortDirection === 'asc' ? -1 : 1;
          }
          return 0;
        });

        this.dataSource.next(sortedData);
      });

    this.searchFormControl.setValue('');


    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id) {
        this.searchFormControl.patchValue(`id=${params.id}`);
      } else if (params.cloud) {
        this.searchFormControl.patchValue(`cloud=${params.cloud}`);
      } else {
        this.searchFormControl.patchValue('');
      }
    });
  }

  /** @ignore */
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Adjusts sort key and direction.
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
