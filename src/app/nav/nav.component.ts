import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {AlertifyService} from '../service/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.authService.login(this.model).subscribe( () => {
      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  // tslint:disable-next-line:typedef
  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedIn();
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
