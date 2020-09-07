import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @Input() customersFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registation successful');
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
