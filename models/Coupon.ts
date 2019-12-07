import { constructor } from 'q';

export class Coupon {


constructor(public couponId?:number, public companyId?:number, public title?:string, public description?:string, public category?:string, public startDate?:Date, public endDate?:Date , public amount?:number, public img?:string){}
    public toString():string   {return this.couponId + ": " + this.companyId + ", title:" + this.title + ", category:" + this.category + ", description:" + this.description + ", start date:" + this.startDate + ", End date:" + this.endDate + ", Amount:" + this.amount + ",image:" + this.img}}
 
