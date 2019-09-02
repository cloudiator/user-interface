import {Component, HostListener, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {EditorService} from '../../services/editor.service';
import {AuthService} from '../../services/auth.service';

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
   * controls if the navigation is visible. false for example on login route.
   * @type {boolean}
   */
  showNav = true;

  /**
   * state of the dropdown burger menu. only shown in mobile view.
   * @type {boolean}
   */
  showBurgerMenu = false;

  /**
   * toggles Badge of Editor tab if Editor has unsaved changes.
   */
  editorHasUnsavedChanges: boolean;

public user$: Observable<string>;

  /**
   * All Subscriptions of this Component.
   * @type {any[]}
   */
  private subscriptions: Subscription[] = [];

  /** @ignore */
  constructor(public authservice: AuthService,
              private activatedRoute: ActivatedRoute,
              private editorService: EditorService,
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

    // hide nav when not logged in
    const s2 = this.authservice.isLoggedIn()
      .subscribe(loggedIn => this.showNav = loggedIn);

    this.user$ = this.authservice.getUser();

    this.subscriptions.push(s0, s1, s2);
  }

  /** @ignore */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
