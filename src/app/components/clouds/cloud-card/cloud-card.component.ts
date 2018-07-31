import {Component, inject, Input, OnInit} from '@angular/core';
import {Cloud} from '../../..';

/**
 * A card that represents a single cloud in the CloudOverviewComponent.
 */

@Component({
  selector: 'app-cloud-card',
  templateUrl: './cloud-card.component.html',
  styleUrls: ['./cloud-card.component.scss']
})
export class CloudCardComponent implements OnInit {

  @Input() cloud: Cloud;

  constructor() {
  }

  ngOnInit() {
  }

}
