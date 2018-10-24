import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';

/**
 * Entry point of this app, everything is shown in this Container.
 * Contains shell elements like the navbar.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  showBurgerMenu = false;
  editorHasUnsavedChanges: boolean;

  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {

    const s0 = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showBurgerMenu = false;
      }
    });

    const s1 = this.store.pipe(select(fromRoot.editorHasUnsavedChanges)).subscribe(value => this.editorHasUnsavedChanges = value);

    this.subscriptions.push(s0);
  }


  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
