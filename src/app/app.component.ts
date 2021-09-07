import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  todaydate;
  public persondata = [];
  newcomponent = "entered new component";
  constructor(private myservice: MyserviceService){}
  ngOnIt(){
    // this.todaydate = this.myservice.showTodayDate();
    // console.log(this.myservice.serviceproperty);
    this.myservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
    })
  }
  months=["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]; 

  isavailable=true;
  // todaydate= new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 
  

  myClickFunction() {
    alert("Button is clicked");
    console.log(event);
    this.isavailable = !this.isavailable;

}
changemonths(){
  console.log("months changed");
  alert("month changed");
}
}
