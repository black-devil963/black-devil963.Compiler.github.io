import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';/*for importing http client module */
import {Getwithparameters} from '../classes/getwithparameters'
@Injectable()
export class freeApiService
{
    
constructor(private httpclient : HttpClient){}/*Injecting the HttpClient using constructor to create an instance of httpclient */
post(opostt:object): Observable<any> { 
    console.log("hi");
    console.log(opostt);
    
var x= this.httpclient.post('https://newapi-nine.vercel.app/compilecode',opostt);
console.log(x);
return x;


}
}