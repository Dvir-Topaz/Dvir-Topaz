import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/Coupon';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client: HttpClient) {}

    public purchaseCoupon(purchaseCoupon:Coupon){
        return this.client.post<Coupon>("http://localhost:8080/coupons/" + sessionStorage.token , purchaseCoupon);
    }

public getAllCustomerCoupons(customerId:number): Observable<Coupon[]>{
  return this.client.get<Coupon[]>("http://localhost:8080/coupons/" + sessionStorage.token);
}
public getAllCouponsByCategory(category:string): Observable<Coupon[]>{
    return this.client.get<Coupon[]>("http://localhost:8080/coupons/" + sessionStorage.token);
  }

public getAllCouponsByPrice(maxprice:number): Observable<Coupon[]>{
  return this.client.get<Coupon[]>("http://localhost:8080/coupons/" + sessionStorage.token);
}
public getCustomerDetails(): Observable<Customer>{
  return this.client.get<Customer>("http://localhost:8080/companies/" + sessionStorage.token);
}

}
