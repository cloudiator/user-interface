import {Component} from '@angular/core';
import * as api from '../../api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showBurgerMenu = false;

  constructor(private cloudService: api.CloudService) {
    cloudService.findClouds().subscribe(value => console.log(value));
  }
}
