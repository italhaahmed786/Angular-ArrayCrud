import { keyframes } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud operation with Array';
  employee = [
    {name: "Talha", position: "Angular"},
    {name: "Fahad", position: "Wordpress"},
    {name: "Shaheer", position: "Java Dev"}
  ];

  model:any={};
  model2:any={};
  msg:any="";

  addEmployee(){
    this.employee.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added....."
  }
  deleteEmployee(i){
    this.employee.splice(i,1)
    //console.log(i);
    this.msg = "Record is successfully deleted....."
  }

  myValue;
  editEmployee(k){
  this.model2.name = this.employee[k].name;
  this.model2.position = this.employee[k].position;
  this.myValue = k;
}

updateEmployee(){
  let k= this.myValue;
  for(let i=0; i<this.employee.length;i++){
    if(i==k){
      this.employee[i]= this.model2;
      this.model2 = {};
      this.msg = "Record is successfully updated....."
    }
  }
}

clickMe(){
  this.msg = "";
}

}
