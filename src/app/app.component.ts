import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
  constructor( private Authservice : AuthService){

  }
  
  fetchAuth(){
    this.data$ =this.Authservice.fetchAuth();

  }
}
 

 