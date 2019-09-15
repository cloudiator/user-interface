import {Component, Input, OnInit} from '@angular/core';
import {Cloud} from 'cloudiator-rest-api';
import {animate, style, transition, trigger} from '@angular/animations';

/**
 * A card that represents a single cloud in the CloudOverviewComponent.
 */
@Component({
  selector: 'app-cloud-card',
  templateUrl: './cloud-card.component.html',
  styleUrls: ['./cloud-card.component.scss']
})
export class CloudCardComponent implements OnInit {

  /**
   * Cloud that is to be represented.
   */
  @Input() cloud: Cloud;

  /** @ignore */
  constructor() {
  }

  /** @ignore */
  ngOnInit() {
  }

  backgroundSelector(name) {
    switch (this.cloud.api.providerName) {
      case 'aws-ec2':
        return name === 'aws';
      case 'openstack4j':
      case 'openstack-nove':
        return name === 'openstack';
      case 'google-compute-engine':
        return name === 'gcp';
      default:
        return name === 'default';
    }
  }
}
