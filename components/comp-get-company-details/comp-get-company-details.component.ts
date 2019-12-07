import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/CompanyService';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';

@Component({
  selector: 'app-comp-get-company-details',
  templateUrl: './comp-get-company-details.component.html',
  styleUrls: ['./comp-get-company-details.component.css']
})
export class CompGetCompanyDetailsComponent implements OnInit {
  company: Company;

  constructor(private compserv:CompanyService, private router: Router) { }

  ngOnInit() {

      }
      getCompanyDetails(){
        this.compserv.getCompanyDetails;{
          alert("Here is the company details:" + this.company);
        }error=>{
alert(error.error);}
      }

}
