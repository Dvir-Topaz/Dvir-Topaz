import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-new-customer',
  templateUrl: './admin-add-new-customer.component.html',
  styleUrls: ['./admin-add-new-customer.component.css']
})
export class AdminAddNewCustomerComponent implements OnInit {
  customer: Customer;

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

    this.customer=new Customer;
      }
      addNewCustomer(){
        this.adminServ.addNewCustomer(this.customer).subscribe(customer=>{
          alert("This customer was successfully created:" + this.customer.name);
        },error=>{
alert(error.error);})
      }

}