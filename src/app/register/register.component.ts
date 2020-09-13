import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {AlertifyService} from '../service/alertify.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @Input() customersFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  // tslint:disable-next-line:typedef
  register() {
    // this.authService.register(this.model).subscribe(() => {
    //   this.alertify.success('registration successful');
    // }, error => {
    //   this.alertify.error(error);
    // });
    console.log(this.registerForm.value);
  }

  // tslint:disable-next-line:typedef
  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.success('cancelled');
  }
}
