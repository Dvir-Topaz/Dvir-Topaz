import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';

@Component({
  selector: 'app-admin-add-new-company',
  templateUrl: './admin-add-new-customer.component.html',
  styleUrls: ['./admin-add-new-customer.component.css']
})
export class AdminAddNewCompanyComponent implements OnInit {
  company: Company;

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

    this.company=new Company;
      }
      addNewCompany(){
        this.adminServ.addNewCompany(this.company).subscribe(company=>{
          alert("This company was successfully created:" + this.company.name);
        },error=>{
alert(error.error);})
      }

}