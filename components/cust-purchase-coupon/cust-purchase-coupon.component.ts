import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CustomerService } from 'src/app/services/CustomerService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-purchase-coupon',
  templateUrl: './cust-purchase-coupon.component.html',
  styleUrls: ['./cust-purchase-coupon.component.css']
})
export class CustPurchaseCouponComponent implements OnInit {
  coupon: Coupon;

  constructor(private custserv:CustomerService, private router: Router) { }

  ngOnInit() {

    this.coupon=new Coupon;
      }
      purchaseCoupon(){
        this.custserv.purchaseCoupon(this.coupon).subscribe(coupon=>{
          alert("You successfully purchased this coupon:" + this.coupon.title);
        },error=>{
alert(error.error);})
      }

}