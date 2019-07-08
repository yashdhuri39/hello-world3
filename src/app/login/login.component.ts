import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl:`/login.component.html` ,
  styles: []
})
export class LoginComponent implements OnInit {

  //inputText: string="inital value"
  //inputText2:string =""
 @Input() public Ydata;
 @Output() public loginEvent = new EventEmitter
  constructor() { }

  ngOnInit() {
   //localStorage.setItem('localData', 'yash');
   //sessionStorage.setItem('sessionData', 'yash2');

   //console.log(localStorage.getItem('localData'));
  //console.log(sessionStorage.getItem('sessionData'));
  }
  FireEvent()
  {
    this.loginEvent.emit('hello yash');
  }

}
      
   

   
  
    
