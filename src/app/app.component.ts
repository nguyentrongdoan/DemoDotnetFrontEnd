import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

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
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
