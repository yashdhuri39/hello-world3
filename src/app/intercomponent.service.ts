import { Injectable } from '@angular/core';
import { Subject}   from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class IntercomponentService {
  private _messagesource = new Subject<string>();
  message1$ = this._messagesource.asObservable();


  constructor() { }
  sendmessage(message: string){
    this._messagesource.next(message);}
    
}
