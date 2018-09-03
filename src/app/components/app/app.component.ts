import {Component, OnInit} from '@angular/core';
import {RuntimeConfigService} from '../../services/runtime-config.service';

/**
 * Entry point of this app, everything is shown in this Container.
 * Contains shell elements like the navbar.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showBurgerMenu = false;

  constructor() {
  }

  ngOnInit() {}
}
