import {Component, inject, Input, OnInit} from '@angular/core';
import {Cloud} from '../../..';

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
