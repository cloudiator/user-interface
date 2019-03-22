import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {catchError, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn().pipe(
      take(1),
      map(loggedIn => {
        if (loggedIn) {
          this.router.navigateByUrl('/');
          return false;
        }
        return true;
      }),
      catchError(err => {
        console.error(err);
        this.router.navigateByUrl('/');
        return of(false);
      })
    );
  }

}
