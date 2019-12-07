import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CustomerService } from 'src/app/services/CustomerService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-get-all-coupons-by-price',
  templateUrl: './cust-get-all-coupons-by-price.component.html',
  styleUrls: ['./cust-get-all-coupons-by-price.component.css']
})
export class CustGetAllCouponsByPriceComponent implements OnInit {
  CouponsByMaxPrice: Coupon[];
  maxprice:number;
  constructor(private custserv:CustomerService, private router: Router) { }

  ngOnInit() {

  }
  getAllCouponsByPrice(){
    this.custserv.getAllCouponsByPrice(this.maxprice).subscribe(CouponsByMaxPrice=>{
      alert("This is a list of all the coupons under price:" + this.maxprice);
    },error=>{
alert(error.error);})
  }
}
