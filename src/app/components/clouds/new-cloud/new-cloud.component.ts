import {Component, OnInit} from '@angular/core';
import {CloudService, NewCloud, Property} from '../../..';

@Component({
  selector: 'app-new-cloud',
  templateUrl: './new-cloud.component.html',
  styleUrls: ['./new-cloud.component.scss']
})
export class NewCloudComponent implements OnInit {

  public cloud: NewCloud = {
    endpoint: '',
    cloudType: 'PRIVATE',
    api: {
      providerName: ''
    },
    credential: {
      user: '',
      secret: ''
    },
    cloudConfiguration: {
      nodeGroup: '',
      properties: []
    }
  };

  constructor(private cloudApi: CloudService) {
  }

  ngOnInit() {
    // this.cloudApi.addCloud()
  }

}
