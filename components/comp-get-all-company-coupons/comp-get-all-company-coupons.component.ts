import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/CompanyService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-get-all-company-coupons',
  templateUrl: './comp-get-all-company-coupons.component.html',
  styleUrls: ['./comp-get-all-company-coupons.component.css']
})
export class CompGetAllCompanyCouponsComponent implements OnInit {
  companyCoupons: Coupon[];

  constructor(private compserv:CompanyService, private router: Router) { }

  ngOnInit() {

      }
      getAllCompanyCoupons(){
        this.compserv.getAllCompanyCoupons;{
          alert("Here is the list of all the company's coupons:" + this.companyCoupons);
        }error=>{
alert(error.error);}
      }

}