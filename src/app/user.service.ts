import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { User } from './shared/signinDataType';
import { Subject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://conduit.productionready.io/api/users"
  currentUserUrl = "https://conduit.productionready.io/api/user"
  currentUsername = new Subject<string>()
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url,user,httpOptions)
  }

  loginUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url+"/login",user,httpOptions)
  }

  setUsername(username: string) {
    this.currentUsername.next(username)
  }

  getCurrentUser(){
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': 'Token '+ localStorage.getItem('token')
      })
    };
    return this.http.get(this.currentUserUrl,httpOptions);
  }
}
