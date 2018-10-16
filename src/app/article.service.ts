import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ArticleService{
  urlForGlobalFeed : string
  urlForTagFeed : string 
  articles = new Subject<any>()

  constructor(private http: HttpClient) { 
    this.urlForGlobalFeed = "https://conduit.productionready.io/api/articles"
    this.urlForTagFeed = "https://conduit.productionready.io/api/articles?tag="
  }

  getFeed() {
    return this.articles
  }

  setGlobalFeed() {
    this.http.get(this.urlForGlobalFeed).subscribe((data) => {
      	this.articles.next(data)
    })
    // console.log(data)
    
    // this.articles.next(data)
  }

  getFeedByTag(currentTag : string) {
    const url = this.urlForTagFeed + currentTag
    this.articles.next(this.http.get(url))

    this.http.get(url).subscribe((data) => {
      this.articles.next(data)
   })
  }
}
