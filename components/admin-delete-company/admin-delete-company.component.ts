import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-delete-company',
  templateUrl: './admin-delete-company.component.html',
  styleUrls: ['./admin-delete-company.component.css']
})
export class AdminDeleteCompanyComponent implements OnInit {
  company: Company;

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

    this.company=new Company;
      }
      deleteCompany(){
        this.adminServ.deleteCompany(this.company.companyId).subscribe(company=>{
          alert("This company was successfully deleted from DB:" + this.company.name);
        },error=>{
alert(error.error);})
      }

}