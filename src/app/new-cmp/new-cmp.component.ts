import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newdata = "entered new data"
  isDisabled: boolean = true;
  months = ["jan", "feb", "mar", "apr"];
  todaydate;
  newcomponentproperty;
  monthschange(){
    console.log("month changed from the dropdown");
    alert("month changed");
  }
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }
 isavailable = false;
 myfunction(){
   this.isavailable = !this.isavailable;
  //  alert("button is clicked");
  //  console.log("event occured");
 }
}
