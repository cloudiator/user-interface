import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Hardware, Image} from 'cloudiator-rest-api';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {CloudDataService} from '../../../services/cloud-data.service';

@Component({
  selector: 'app-images-overview',
  templateUrl: './images-overview.component.html',
  styleUrls: ['./images-overview.component.scss']
})
export class ImagesOverviewComponent implements OnInit {

  dataSource: BehaviorSubject<Image[]>;

  searchFormControl = new FormControl();

  sortKey = new BehaviorSubject<string>('');
  sortDirection = new BehaviorSubject<string>('');

  constructor(public cloudDataService: CloudDataService) { }

  ngOnInit() {

    combineLatest(this.cloudDataService.findImages(), this.searchFormControl.valueChanges, this.sortKey, this.sortDirection)
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


    this.cloudDataService.findImages().subscribe(images => {
      this.dataSource = new BehaviorSubject<Image[]>(images);
      this.adjustSort('name');
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
