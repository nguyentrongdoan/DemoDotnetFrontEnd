import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() customersFromHome: any;
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register() {
    console.log(this.model);
  }

  // tslint:disable-next-line:typedef
  cancel() {
    console.log('cancelled');
  }
}
