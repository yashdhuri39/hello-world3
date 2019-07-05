import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService{
//private _url: string = '/src/app/test/file.json';
constructor( private http : HttpClient){}
 fetchAuth(): Observable<object>{
    return this.http.get('assests/Data/file.json');
 }
}