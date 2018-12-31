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

  showBurgerMenu = false;
  editorHasUnsavedChanges: boolean;

  private subscriptions: Subscription[] = [];

  constructor(private editorService: EditorService,
              private router: Router) {
  }

  @HostListener('window:beforeunload')
  unloadNotification() {
    // ToDo: reactivate
    // return !this.editorHasUnsavedChanges;
  }

  ngOnInit() {

    const s0 = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showBurgerMenu = false;
      }
    });

    const s1 = this.editorService.HasUnsaveChanges().subscribe(value => this.editorHasUnsavedChanges = value);

    this.subscriptions.push(s0, s1);
  }


  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
