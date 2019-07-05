import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'\
@Injectable({
    providedIn: 'root'
})
export class AuthService{
private _url: string = '/src/app/test/file.json';
constructor( private http : HttpClient){}
 getdata(){
    
 }
}