import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl : string = "https://conduit.productionready.io/api/profiles/"
  constructor(private http: HttpClient) { }

  getUserProfile(username:string) {
    return this.http.get(this.baseUrl+username)
  }

}
