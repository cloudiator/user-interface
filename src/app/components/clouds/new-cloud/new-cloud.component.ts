import {Component, OnInit} from '@angular/core';
import {NewCloud} from '../../..';
import {CloudDataService} from '../../../services/cloud-data.service';
import {Router} from '@angular/router';

/**
 * A Form to add a new Cloud.
 */

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

  /**
   * Will return the first half of the user field, that represents the tenant.
   */
  get tenant(): string {
    return this.cloud.credential.user.split(':')[0];
  }

  /**
   * sets the second half of the user field, that represents the username.
   * @param tenant {string} new tenant
   */
  set tenant(tenant: string) {
    this.cloud.credential.user = `${tenant}:${this.cloud.credential.user.split(':')[1]}`;
  }

  /**
   * Will return the second half of the user field, that represents the username.
   */
  get user(): string {
    return this.cloud.credential.user.split(':')[1];
  }

  /**
   * sets the second half of the user field, that represents the username.
   * @param user {string} new username
   */
  set user(user: string) {
    this.cloud.credential.user = `${this.cloud.credential.user.split(':')[0]}:${user}`;
  }

  constructor(private cloudDataService: CloudDataService,
              private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * Adds a new empty entry to the properties Array of cloud.
   */
  public addProperty() {
    this.cloud.cloudConfiguration.properties.push({key: '', value: ''});
  }

  /**
   * Filters empty property entries, as the server wont accept requests with empty properties,
   * then submits the new cloud and afterwards navigates back to the cloud overview.
   */
  public onSubmit() {
    this.cloud.cloudConfiguration.properties = this.cloud.cloudConfiguration.properties.filter(p => p.key !== '');
    this.cloudDataService.addCloud(this.cloud).subscribe(() => this.router.navigateByUrl('/clouds'));
  }

}
