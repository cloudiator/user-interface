import {Component, Input, OnInit} from '@angular/core';
import {Cloud} from 'cloudiator-rest-api';

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
}
