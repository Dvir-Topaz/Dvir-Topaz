import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/CustomerService';

@Component({
  selector: 'app-cust-get-all-coupons-by-category',
  templateUrl: './cust-get-all-coupons-by-category.component.html',
  styleUrls: ['./cust-get-all-coupons-by-category.component.css']
})
export class CustGetAllCouponsByCategoryComponent implements OnInit {
  CouponsBycategory: Coupon[];
  category:string;
  constructor(private custserv:CustomerService, private router: Router) { }

  ngOnInit() {

  }
  getAllCouponsByCategory(){
    this.custserv.getAllCouponsByCategory(this.category).subscribe(category=>{
      alert("This is a list of all the coupons under this category:" + this.category);
    },error=>{
alert(error.error);})
  }
}