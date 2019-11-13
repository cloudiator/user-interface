import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

/**
 * Login Screen. Navigationbar will be hidden when this view is active.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Login form data.
   * @type {{password: string; email: string; tenant: {tenant: string}}}
   */
  login = {
    email: '',
    tenant: {tenant: ''},
    password: ''
  };

  /**
   * indicates if login is requested.
   * @type {boolean}
   */
  isLoggingIn = false;

  /**
   * indicates if a failed login attempt has occured.
   * @type {boolean}
   */
  logInError = false;

  /** @ignore */
  constructor(private authService: AuthService,
              private router: Router) {
  }

  /** @ignore */
  ngOnInit() {
  }

  /**
   * sends a new login request with the given data and reroutes to default view if successfull.
   */
  onLogin() {
    this.isLoggingIn = true;
    this.authService.logIn(this.login).subscribe(success => {
        this.isLoggingIn = false;
        if (success) {
          this.router.navigate(['/']);
        } else {
          this.logInError = true;
        }
      },
      () => {
        this.isLoggingIn = false;
        this.logInError = true;
      },
      () => {
        this.isLoggingIn = false;
        this.logInError = true;
      }
    );
  }

}
