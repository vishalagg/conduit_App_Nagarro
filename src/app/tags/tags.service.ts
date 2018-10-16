import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  url = " https://conduit.productionready.io/api/tags" 
  constructor(private http: HttpClient) { }

  getGlobalTags(){
    return this.http.get(this.url);
  }
}
