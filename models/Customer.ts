import { constructor } from 'q';

export class Customer { 

constructor(public customerId?:number, public name?:string, public email?:string, public password?:string){}

    public toString():string{
        return this.customerId + ": " + this.name + ", email: " + this.email + ", password: "  +this.password ;
    }

}