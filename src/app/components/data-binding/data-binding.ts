import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  
  courseName: string = "Angular 20 Tutorial";
  
  productPrice : number = 12500;

 maxlength : number = 5;
  
 minChar : number = 3;

 inputType : string = "checkbox";

 myClassName : string = "myColor";

 constructor()  {
  }

  showWelcomeMessage() {
    alert("welcome to Angular 20")
  }
  changeCourseName() {
    this.courseName = "reactjs Tutorial"
  }
}
