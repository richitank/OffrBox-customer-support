import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class StoreCustomerFeedback{
    constructor(private http: Http) {}
    
    
    storeInfo (form: any[]) {
         return this.http.post('https://offrbox-tenant-screening.firebaseio.com/CustomerFeedback.json' , form);
    }
}