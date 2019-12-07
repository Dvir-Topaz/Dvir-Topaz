import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CustomerService } from 'src/app/services/CustomerService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-get-all-customer-coupons',
  templateUrl: './cust-get-all-customer-coupons.component.html',
  styleUrls: ['./cust-get-all-customer-coupons.component.css']
})
export class CustGetAllCustomerCouponsComponent implements OnInit {
  customerCoupons: Coupon[];

  constructor(private custserv:CustomerService, private router: Router) { }

  ngOnInit() {

      }
      getAllCustomerCoupons(){
        this.custserv.getAllCustomerCoupons;{
          alert("Here is the list of all the customer's coupons:" + this.customerCoupons);
        }error=>{
alert(error.error);}
      }

}
