import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  customers: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  // tslint:disable-next-line:typedef
  registerToggle() {
    this.registerMode = true;
  }

  // tslint:disable-next-line:typedef
  getCustomers(){
    this.http.get('http://localhost:5000/api/customerApi').subscribe(response => this.customers = response);
  }

  // tslint:disable-next-line:typedef
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
