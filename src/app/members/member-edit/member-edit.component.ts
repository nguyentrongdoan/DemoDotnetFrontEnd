import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../model/user';
import {AlertifyService} from '../../service/alertify.service';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  photoUrl: string;
  @HostListener('window: beforeunload', ['$event'])
  // tslint:disable-next-line:typedef
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = false;
    }
  }

  constructor(private route: ActivatedRoute,
              private alertify: AlertifyService, private userService: UserService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  // tslint:disable-next-line:typedef
  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.success('Profile update successfully');
      this.editForm.reset(this.user);
      console.log(next);
    }, error => {
      this.alertify.error(error);
    });
  }
  // tslint:disable-next-line:typedef
  updateMainPhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
  }
}
