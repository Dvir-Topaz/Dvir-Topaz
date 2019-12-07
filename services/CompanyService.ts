import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/Coupon';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private client: HttpClient) { }

    public addNewCoupon(newCoupon:Coupon){
        return this.client.post<Coupon>("http://localhost:8080/coupons/" + sessionStorage.token , newCoupon);
    }

    public updateCoupon(coupon:Coupon){  
      return this.client.put<Coupon>("http://localhost:8080/coupons/" + sessionStorage.token , coupon);
  }

  public deleteCoupon(couponId:number){ 
    return this.client.delete<Coupon>("http://localhost:8080/coupons/" + sessionStorage.token+ "/" + couponId);
}

public getAllCompanyCoupons(): Observable<Coupon[]>{
  return this.client.get<Coupon[]>("http://localhost:8080/coupons/" + sessionStorage.token);
}

public getAllCouponsByPrice(msxprice:number): Observable<Coupon[]>{
  return this.client.get<Coupon[]>("http://localhost:8080/coupons/" + sessionStorage.token);
}
public getCompanyDetails(): Observable<Company>{
  return this.client.get<Company>("http://localhost:8080/companies/" + sessionStorage.token);
}

}
