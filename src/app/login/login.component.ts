import { Component, OnInit } from '@angular/core';
import { FormsModule}  from '@angular/forms'
import { NgModel} from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  template: `
  <form>
  <div class="Input">
      <label>Username</label>
      <input type="text" >
  </div>
  <div class="Input" name="Password">
      <label>Password</label>
      <input type="password">
  </div>
  <div class="Input">
      <input type="submit" value="Login" (click)="loginuser">
  </div>
</form> 
<nav>
  <a routerLink="/services" routerLinkActive="Active">Services</a>
</nav>
<router-outlet></router-outlet>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
    username:String;
    password:string;
  constructor() { }

  ngOnInit() {
  }
  Loginuser(){
       if (this.username == "admin" && this.password == "admin") 
    {
      return "Welcome"
    }

  }
    }
