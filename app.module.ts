import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AdminUpdateCompanyComponent } from './components/admin-update-company/admin-update-company.component';
import { AdminDeleteCompanyComponent } from './components/admin-delete-company/admin-delete-company.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { AdminGetAllCompaniesComponent } from './components/admin-get-all-companies/admin-get-all-companies.component';
import { AdminGetOneCompanyComponent } from './components/admin-get-one-company/admin-get-one-company.component';
import { AdminAddNewCustomerComponent } from './components/admin-add-new-customer/admin-add-new-customer.component';
import { AdminUpdateCustomerComponent } from './components/admin-update-customer/admin-update-customer.component';
import { AdminDeleteCustomerComponent } from './components/admin-delete-customer/admin-delete-customer.component';
import { AdminGetAllCustomersComponent } from './components/admin-get-all-customers/admin-get-all-customers.component';
import { AdminGetOneCustomerComponent } from './components/admin-get-one-customer/admin-get-one-customer.component';
import { CompAddNewCouponComponent } from './components/comp-add-new-coupon/comp-add-new-coupon.component';
import { CompUpdateCouponComponent } from './components/comp-update-coupon/comp-update-coupon.component';
import { CompDeleteCouponComponent } from './components/comp-delete-coupon/comp-delete-coupon.component';
import { CompGetAllCompanyCouponsComponent } from './components/comp-get-all-company-coupons/comp-get-all-company-coupons.component';
import { CompGetAllCouponsByPriceComponent } from './components/comp-get-all-coupons-by-price/comp-get-all-coupons-by-price.component';
import { CompGetCompanyDetailsComponent } from './components/comp-get-company-details/comp-get-company-details.component';
import { CustPurchaseCouponComponent } from './components/cust-purchase-coupon/cust-purchase-coupon.component';
import { CustGetAllCustomerCouponsComponent } from './components/cust-get-all-customer-coupons/cust-get-all-customer-coupons.component';
import { CustGetAllCouponsByCategoryComponent } from './components/cust-get-all-coupons-by-category/cust-get-all-coupons-by-category.component';
import { CustGetAllCouponsByPriceComponent } from './components/cust-get-all-coupons-by-price/cust-get-all-coupons-by-price.component';
import { CustGetCustomerDetailsComponent } from './components/cust-get-customer-details/cust-get-customer-details.component'

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    AddCompanyComponent,
    AdminUpdateCompanyComponent,
    AdminDeleteCompanyComponent,
    GetAllCompaniesComponent,
    AdminGetAllCompaniesComponent,
    AdminGetOneCompanyComponent,
    AdminAddNewCustomerComponent,
    AdminUpdateCustomerComponent,
    AdminDeleteCustomerComponent,
    AdminGetAllCustomersComponent,
    AdminGetOneCustomerComponent,
    CompAddNewCouponComponent,
    CompUpdateCouponComponent,
    CompDeleteCouponComponent,
    CompGetAllCompanyCouponsComponent,
    CompGetAllCouponsByPriceComponent,
    CompGetCompanyDetailsComponent,
    CustPurchaseCouponComponent,
    CustGetAllCustomerCouponsComponent,
    CustGetAllCouponsByCategoryComponent,
    CustGetAllCouponsByPriceComponent,
    CustGetCustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
