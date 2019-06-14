import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Image} from 'cloudiator-rest-api';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

/**
 * Overview of all Images available.
 */
@Component({
  selector: 'app-images-overview',
  templateUrl: './images-overview.component.html',
  styleUrls: ['./images-overview.component.scss']
})
export class ImagesOverviewComponent implements OnInit {

  /**
   * Datasource for table.
   * @type {BehaviorSubject<Image[]>}
   */
  dataSource = new BehaviorSubject<Image[]>([]);

  /**
   * Searchbar object.
   * @type {FormControl}
   */
  searchFormControl = new FormControl();

  /**
   * Key That is sorted by.
   * @type {BehaviorSubject<string>}
   */
  sortKey = new BehaviorSubject<string>('');
  /**
   * Sort direction.
   * @type {BehaviorSubject<string>}
   */
  sortDirection = new BehaviorSubject<string>('');

  /**
   * indicates if data is being loaded right now.
   * @type {boolean}
   */
  isLoading = true;

  /** @ignore */
  constructor(private activatedRoute: ActivatedRoute,
              public cloudDataService: CloudDataService) {
  }

  /** @ignore */
  ngOnInit() {

    this.adjustSort('name');

    combineLatest(
      this.cloudDataService.findImages().pipe(tap(() => this.isLoading = false)),
      this.searchFormControl.valueChanges,
      this.sortKey,
      this.sortDirection
    )
      .subscribe(([changedHardwareData, searchTerm, sortKey, sortDirection]) => {
        const imagesArray = Object.values(changedHardwareData);

        let filteredImages = [];

        if (!searchTerm) {
          filteredImages = imagesArray;
        } else {
          filteredImages = this.cloudDataService.filterImages(imagesArray, searchTerm);
        }

        const sortedImages = filteredImages.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) {
            return sortDirection === 'asc' ? 1 : -1;
          }
          if (a[sortKey] < b[sortKey]) {
            return sortDirection === 'asc' ? -1 : 1;
          }
          return 0;
        });

        this.dataSource.next(sortedImages);
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
