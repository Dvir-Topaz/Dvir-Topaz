import { constructor } from 'q';

export class Company { 

constructor(public companyId?:number, public name?:string, public email?:string, public password?:string){}
    public toString():string{        return this.companyId + ": " + this.name + ", email: " + this.email + ", password: "  +this.password ;    }}