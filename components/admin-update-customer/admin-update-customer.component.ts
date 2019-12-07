import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-customer',
  templateUrl: './admin-update-customer.component.html',
  styleUrls: ['./admin-update-customer.component.css']
})
export class AdminUpdateCustomerComponent implements OnInit {
  customer: Customer;

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

    this.customer=new Customer;
      }
      updateCustomer(){
        this.adminServ.updateCustomer(this.customer).subscribe(company=>{
          alert("This customer's data was successfully updated:" + this.customer.name);
        },error=>{
alert(error.error);})
      }

}