import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {AlertifyService} from '../service/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @Input() customersFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registation successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  // tslint:disable-next-line:typedef
  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.success('cancelled');
  }
}
