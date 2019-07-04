import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl:`./login.component.html` ,
  styles: []
})
export class LoginComponent implements OnInit {

  inputText: string="inital value"
  inputText2:string =""

  constructor() { }

  ngOnInit() {
   localStorage.setItem('localData', 'yash');
   sessionStorage.setItem('sessionData', 'yash2');

   console.log(localStorage.getItem('localData'));
  console.log(sessionStorage.getItem('sessionData'));
  }
  
}
      
   

   
  
    
