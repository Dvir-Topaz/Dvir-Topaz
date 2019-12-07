import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/AdminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-get-all-customers',
  templateUrl: './admin-get-all-customers.component.html',
  styleUrls: ['./admin-get-all-customers.component.css']
})
export class AdminGetAllCustomersComponent implements OnInit {
  companies: Customer[];

  constructor(private adminServ:AdminService, private router: Router) { }

  ngOnInit() {

      }
      getAllCustomers(){
        this.adminServ.getAllCustomers;{
          alert("Here is the list of all the customers on the DB:" + this.getAllCustomers);
        }error=>{
alert(error.error);}
      }

}
