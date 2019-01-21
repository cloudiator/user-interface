import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {EditorService} from '../../services/editor.service';

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

  /**
   * state of the dropdown burger menu. only shown in mobile view.
   * @type {boolean}
   */
  showBurgerMenu = false;

  /**
   * toggles Badge of Editor tab if Editor has unsaved changes.
   */
  editorHasUnsavedChanges: boolean;

  /**
   * All Subscriptions of this Component.
   * @type {any[]}
   */
  private subscriptions: Subscription[] = [];

  /** @ignore */
  constructor(private editorService: EditorService,
              private router: Router) {
  }

  /**
   * Adds page reload warning if unsaved changes exist.
   */
  @HostListener('window:beforeunload')
  unloadNotification() {
    // ToDo: reactivate
    // return !this.editorHasUnsavedChanges;
  }

  /** @ignore */
  ngOnInit() {

    const s0 = this.router.events.subscribe(event => {
      // close burgermenu if navigation is started
      if (event instanceof NavigationStart) {
        this.showBurgerMenu = false;
      }
    });

    const s1 = this.editorService.HasUnsaveChanges().subscribe(value => this.editorHasUnsavedChanges = value);

    this.subscriptions.push(s0, s1);
  }

  /** @ignore */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
