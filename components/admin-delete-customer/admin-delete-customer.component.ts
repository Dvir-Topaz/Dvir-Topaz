import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-delete-customer',
  templateUrl: './admin-delete-customer.component.html',
  styleUrls: ['./admin-delete-customer.component.css']
})
export class AdminDeleteCustomerComponent implements OnInit {
  customer: Customer;

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

    this.customer=new Customer;
      }
      deleteCustomer(){
        this.adminServ.deleteCustomer(this.customer.customerId).subscribe(customer=>{
          alert("This customer was successfully deleted from DB:" + this.customer.name);
        },error=>{
alert(error.error);})
      }

}