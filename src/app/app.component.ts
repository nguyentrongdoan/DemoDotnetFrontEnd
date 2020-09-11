import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'example';
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.authService.currentUser = user;
    }
  }
}
