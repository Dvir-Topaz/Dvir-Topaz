import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/CompanyService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-delete-coupon',
  templateUrl: './comp-delete-coupon.component.html',
  styleUrls: ['./comp-delete-coupon.component.css']
})
export class CompDeleteCouponComponent implements OnInit {
  coupon: Coupon;

  constructor(private compserv:CompanyService, private router: Router) { }

  ngOnInit() {

    this.coupon=new Coupon;
      }
      deleteCoupon(){
        this.compserv.deleteCoupon(this.coupon.couponId).subscribe(coupon=>{
          alert("This coupon was successfully deleted from DB:" + this.coupon.title);
        },error=>{
alert(error.error);})
      }

}