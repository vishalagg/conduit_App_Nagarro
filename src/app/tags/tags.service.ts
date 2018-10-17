import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  url = " https://conduit.productionready.io/api/tags" 
  tagName = new Subject<any>()
  constructor(private http: HttpClient) { }

  getGlobalTags(){
    return this.http.get(this.url);
  }

  setTagName(name) {
    this.tagName.next(name)
  }

  getTagName() {
    return this.tagName
  }

}
