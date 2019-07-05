import { Component } from '@angular/core';
import { AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = " hello-world3";
  data$;
  constructor( private Authservice : AuthService){

  }
  
  fetchAuth(){
    this.data$ =this.Authservice.fetchAuth();

  }
}
 

 