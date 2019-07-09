import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { IntercomponentService } from './intercomponent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Message;
  data$;
  public Name ="Yash";
  public message= "";
  constructor( private Authservice : AuthService, private intercomponent : IntercomponentService){
  

  } 
  sayhello(){
    this.intercomponent.sendmessage('hello aditya');
  }
  
  fetchAuth(){
    this.data$ =this.Authservice.fetchAuth();

  }
}
 

 