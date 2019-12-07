import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/CompanyService';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-comp-add-new-coupon',
  templateUrl: './comp-add-new-coupon.component.html',
  styleUrls: ['./comp-add-new-coupon.component.css']
})
export class CompAddNewCouponComponent implements OnInit {
  coupon: Coupon;

  constructor(private compserv:CompanyService, private router: Router) { }

  ngOnInit() {

    this.coupon=new Coupon;
      }
      addNewCoupon(){
        this.compserv.addNewCoupon(this.coupon).subscribe(coupon=>{
          alert("This customer was successfully created:" + this.coupon.title);
        },error=>{
alert(error.error);})
      }

}