import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = "service creaed";
  //private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getData() {
     return this.http.get(this.apiurl);
  }
  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
}
