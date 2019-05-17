import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {catchError, map, take} from 'rxjs/operators';

/**
 * Reroutes un authorized url access to the login view.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /** @ignore */
  constructor(private authService: AuthService,
              private router: Router) {
  }

  /** @ignore */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn().pipe(
      take(1),
      map(loggedIn => {
        if (!loggedIn) {
          this.router.navigateByUrl('/login');
          return false;
        }
        return true;
      }),
      catchError(err => {
        console.error(err);
        this.router.navigateByUrl('/login');
        return of(false);
      })
    );
  }

}
