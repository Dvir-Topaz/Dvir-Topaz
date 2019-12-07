import { constructor } from 'q';

export class Administrator { 

constructor(public name?:string, public email?:string, public password?:string){}

    public toString():string{
        return this.name + ", email: " + this.email + ", password: "  +this.password ;
    }
}