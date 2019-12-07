import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-get-one-customer',
  templateUrl: './admin-get-one-customer.component.html',
  styleUrls: ['./admin-get-one-customer.component.css']
})
export class AdminGetOneCustomerComponent implements OnInit {
  customer: Customer;

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

    this.customer=new Customer;
      }
      getOneCustomer(){
        this.adminServ.getOneCustomer(this.customer.customerId).subscribe(customer=>{
          alert("This is the customer you requested:" + this.customer.name);
        },error=>{
alert(error.error);})
      }

}
