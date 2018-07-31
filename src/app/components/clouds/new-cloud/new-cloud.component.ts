import {Component, OnInit} from '@angular/core';
import {NewCloud} from '../../..';
import {CloudDataService} from '../../../services/cloud-data.service';
import {Router} from '@angular/router';

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
      user: ':',
      secret: ''
    },
    cloudConfiguration: {
      nodeGroup: '',
      properties: [
        {
          key: '',
          value: ''
        },
      ]
    }
  };

  get tenant(): string {
    return this.cloud.credential.user.split(':')[0];
  }

  set tenant(tenant: string) {
    this.cloud.credential.user = `${tenant}:${this.cloud.credential.user.split(':')[1]}`;
  }

  get user(): string {
    return this.cloud.credential.user.split(':')[1];
  }

  set user(user: string) {
    this.cloud.credential.user = `${this.cloud.credential.user.split(':')[0]}:${user}`;
  }

  constructor(private cloudDataService: CloudDataService,
              private router: Router) {
  }

  ngOnInit() {
  }

  public addProperty() {
    this.cloud.cloudConfiguration.properties.push({key: '', value: ''});
  }

  public onSubmit() {
    this.cloud.cloudConfiguration.properties = this.cloud.cloudConfiguration.properties.filter(p => p.key !== '');
    this.cloudDataService.addCloud(this.cloud).subscribe(() => this.router.navigateByUrl('/clouds'));
  }

}
