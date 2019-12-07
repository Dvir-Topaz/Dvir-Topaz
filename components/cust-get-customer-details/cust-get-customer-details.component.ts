import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/CustomerService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-get-customer-details',
  templateUrl: './cust-get-customer-details.component.html',
  styleUrls: ['./cust-get-customer-details.component.css']
})
export class CustGetCustomerDetailsComponent implements OnInit {
  customer: Customer;

  constructor(private custserv:CustomerService, private router: Router) { }

  ngOnInit() {

      }
      getCustomerDetails(){
        this.custserv.getCustomerDetails;{
          alert("Here is the customer details:" + this.customer);
        }error=>{
alert(error.error);}
      }

}
