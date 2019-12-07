import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/CompanyService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-update-coupon',
  templateUrl: './comp-update-coupon.component.html',
  styleUrls: ['./comp-update-coupon.component.css']
})
export class CompUpdateCouponComponent implements OnInit {
  coupon: Coupon;

  constructor(private compserv:CompanyService, private router: Router) { }

  ngOnInit() {

    this.coupon=new Coupon;
      }
      updateCompany(){
        this.compserv.updateCoupon(this.coupon).subscribe(coupon=>{
          alert("This company was successfully updated:" + this.coupon.title);
        },error=>{
alert(error.error);})
      }

}