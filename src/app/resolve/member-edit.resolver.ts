import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {AlertifyService} from '../service/alertify.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class MemberEditResolver implements Resolve<User> {
  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService,
              private alertify: AlertifyService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(() => {
        this.alertify.error('Problem retrieving your data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
