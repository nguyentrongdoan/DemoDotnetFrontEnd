import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {AlertifyService} from '../../service/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  // tslint:disable-next-line:typedef
  loadUsers() {
    this.userService.getUsers().subscribe(next => {
      this.users = next;
    }, error => {
      this.alertify.error(error);
    });
  }

}
