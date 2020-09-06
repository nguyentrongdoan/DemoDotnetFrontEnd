import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  customers: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  // tslint:disable-next-line:typedef
  getCustomers(){
    this.http.get('http://localhost:5000/api/customerApi').subscribe(response => this.customers = response);
  }

}
