import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IntercomponentService } from '../intercomponent.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
  constructor(private intercomponent: IntercomponentService) { }

  ngOnInit() {
    this.intercomponent.message1$
    .subscribe(
      Message=>{
        if (Message === 'hello aditya'){
          alert( 'welcome Aditya');
        }
      }
    )
    localStorage.setItem('localData', 'yash');
    sessionStorage.setItem('sessionData', 'yash2');

    console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('sessionData'));
  }
  //FireEvent()
  //{
    //this.loginEvent.emit('hello yash');
  //}

}
      
   

   
  
    
