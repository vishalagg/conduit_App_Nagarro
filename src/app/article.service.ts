import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject, Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ArticleService{
  urlForGlobalFeed : string
  urlForTagFeed : string 
  baseUrl : string
  articles = new Subject()

  constructor(private http: HttpClient) { 
    this.baseUrl = "https://conduit.productionready.io/api/articles/"
    this.urlForGlobalFeed = this.baseUrl
    this.urlForTagFeed = this.baseUrl +"?tag="
    // this.setGlobalFeed()
  }

  getFeed() {
    return this.articles
  }

  setGlobalFeed() {
    this.http.get(this.urlForGlobalFeed).subscribe((data) => {
      	this.articles.next(data)
    })
  }

  setUserFeed() {
    const url = this.baseUrl + 'feed'
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': 'Token '+ localStorage.getItem('token')
      })
    };
    this.http.get(url,httpOptions).subscribe((data) => {
      this.articles.next(data)
    })
  }
  
  getFeedByTag(currentTag : string) {
    const url = this.urlForTagFeed + currentTag
    this.articles.next(this.http.get(url))

    this.http.get(url).subscribe((data) => {
      this.articles.next(data)
   })
  }

  getArticleDetails(slug: string){
    return this.http.get(this.urlForGlobalFeed+"/"+slug);
  }

  getComments(slug : string) {
    const url = this.baseUrl + slug + '/comments'
    return this.http.get(url)
  }

  postComments(userComment : string,slug:string) {
    const url = this.baseUrl + slug + '/comments'
    const body = {
      comment: {
        body: userComment
      }
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'authorization': 'Token '+ localStorage.getItem('token')
      })
    };
    return this.http.post(url, body, httpOptions)
  }

  deleteComment(slug:string,id:number) {
    const url = `${this.baseUrl}${slug}/comments/${id}`
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': 'Token '+ localStorage.getItem('token')
      })
    };
    return this.http.delete(url,httpOptions)
  }

  createArticle(article : any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': 'Token '+ localStorage.getItem('token')
      })
    };
    const body = {
      article: article
    }
    return this.http.post(this.baseUrl,body,httpOptions)
  }

  updateArticle(article : any, slug: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': 'Token '+ localStorage.getItem('token')
      })
    };
    const body = {
      article: article
    }
    return this.http.put(this.baseUrl+slug,body,httpOptions)
  }

  deleteArticle(slug:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': 'Token '+ localStorage.getItem('token')
      })
    };
    return this.http.delete(this.baseUrl+slug,httpOptions)
  }

  setMyArticles(author: string) {
    const url = "https://conduit.productionready.io/api/articles?author="+author
    this.http.get(url).subscribe((data) => {
      this.articles.next(data)
    })
  }

  setFavouriteFeed(author: string){
    const url = "https://conduit.productionready.io/api/articles?favorited="+author
    this.http.get(url).subscribe((data) => {
      this.articles.next(data)
    })
  }

}
