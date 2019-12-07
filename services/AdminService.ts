import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';
import { Customer } from '../models/Customer';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    constructor(private client: HttpClient) { }




    public addNewCompany(newCompany:Company){
        return this.client.post<Company>("http://localhost:8080/companies/" + sessionStorage.token , newCompany);
    }

    public updateCompany(company:Company){  
        return this.client.put<Company>("http://localhost:8080/companies/" + sessionStorage.token , company);
    }
    public deleteCompany(companyId:number){ 
        return this.client.delete<Company>("http://localhost:8080/companies/" + sessionStorage.token+ "/" + companyId);
    }

    public getAllCompanies(): Observable<Company[]>{
        return this.client.get<Company[]>("http://localhost:8080/companies/" + sessionStorage.token);
    }

    public getOneCompany(companyId:number): Observable<Company>{
        return this.client.get<Company>("http://localhost:8080/companies/" + sessionStorage.token+ "/" + companyId);
    }

    public addNewCustomer(newCustomer:Customer){
        return this.client.post<Customer>("http://localhost:8080/customers/" + sessionStorage.token , newCustomer);
    }

    public updateCustomer(customer:Customer){  
        return this.client.put<Customer>("http://localhost:8080/customers/" + sessionStorage.token , customer);
    }

    public deleteCustomer(customerId:number){ 
        return this.client.delete<Customer>("http://localhost:8080/customers/" + sessionStorage.token+ "/" + customerId);
    }

    public getAllCustomers(): Observable<Customer[]>{
        return this.client.get<Customer[]>("http://localhost:8080/customers/" + sessionStorage.token);
    }
    public getOneCustomer(customerId:number): Observable<Customer>{
        return this.client.get<Customer>("http://localhost:8080/customers/" + sessionStorage.token+ "/" + customerId);
    }
}
