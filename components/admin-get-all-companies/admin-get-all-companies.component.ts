import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-get-all-companies',
  templateUrl: './admin-get-all-companies.component.html',
  styleUrls: ['./admin-get-all-companies.component.css']
})
export class AdminGetAllCompaniesComponent implements OnInit {
  companies: Company[];

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

      }
      getAllCompanies(){
        this.adminServ.getAllCompanies;{
          alert("Here is the list of all the companies on the DB:" + this.companies);
        }error=>{
alert(error.error);}
      }

}
