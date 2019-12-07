import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-get-one-company',
  templateUrl: './admin-get-one-company.component.html',
  styleUrls: ['./admin-get-one-company.component.css']
})
export class AdminGetOneCompanyComponent implements OnInit {
  company: Company;

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

    this.company=new Company;
      }
      getOneCompany(){
        this.adminServ.getOneCompany(this.company.companyId).subscribe(company=>{
          alert("This is the company you requested:" + this.company.name);
        },error=>{
alert(error.error);})
      }

}
