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

  constructor(private cloudDataService: CloudDataService) {
  }

  ngOnInit() {
    combineLatest(this.cloudDataService.findHardware(), this.searchFormControl.valueChanges)
      .subscribe(([changedHardwareData, searchTerm]) => {
        const hardwareArray = Object.values(changedHardwareData);

        if (!searchTerm) {
          this.dataSource.next(hardwareArray);
          return;
        }

        const filteredResults = this.cloudDataService.filterHardware(hardwareArray, searchTerm);

        this.dataSource.next(filteredResults);
      });


    this.cloudDataService.findHardware().subscribe(hardware => {
      this.dataSource = new BehaviorSubject<Hardware[]>(hardware);
    });
  }

}



