import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    tenant: {tenant: ''},
    password: ''
  };

  isLoggingIn = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.isLoggingIn = true;
    this.authService.logIn(this.login).subscribe(success => {
      this.isLoggingIn = false;
      if (success) {
        this.router.navigate(['/']);
      }
    });
  }

}
