import { Component, OnInit } from '@angular/core';
import { FormsModule, CheckboxControlValueAccessor}  from '@angular/forms'
import { NgModel} from '@angular/forms'
import { from } from 'rxjs';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-login',
  templateUrl:`./login.component.html` ,
  styles: []
})
export class LoginComponent implements OnInit {
    username:String;
    password:string;
  constructor() { }

  ngOnInit() {
  }
   check(){
    var output = this.username.length
    var output = this.password.length
      {
        if(this.username.length == 5 && this.password.length== 5 )
        {
          return "welcome"
        }
      }
   }

   
  
    }
