import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/CompanyService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-get-all-coupons-by-price',
  templateUrl: './comp-get-all-coupons-by-price.component.html',
  styleUrls: ['./comp-get-all-coupons-by-price.component.css']
})
export class CompGetAllCouponsByPriceComponent implements OnInit {

  CouponsByMaxPrice: Coupon[];
  maxprice:number;
  constructor(private compserv:CompanyService, private router: Router) { }

  ngOnInit() {

  }
  getAllCouponsByPrice(){
    this.compserv.getAllCouponsByPrice(this.maxprice).subscribe(CouponsByMaxPrice=>{
      alert("This is a list of all the coupons under price:" + this.maxprice);
    },error=>{
alert(error.error);})
  }
}
