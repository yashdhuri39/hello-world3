import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
//import { AuthService} from './auth.service';
//import { AuthGuard} from './auth.guard'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //AuthService
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
