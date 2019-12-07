import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/AdminService';
import { Company } from 'src/app/models/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-company',
  templateUrl: './admin-update-company.component.html',
  styleUrls: ['./admin-update-company.component.css']
})
export class AdminUpdateCompanyComponent implements OnInit {

  company: Company;

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

    this.company=new Company;
      }
      updateCompany(){
        this.adminServ.updateCompany(this.company).subscribe(company=>{
          alert("This company was successfully updated:" + this.company.name);
        },error=>{
alert(error.error);})
      }

}