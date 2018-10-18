import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles : any
  constructor(private articalService: ArticleService) { }

  ngOnInit() {
    this.articalService.getFeed().subscribe((data : {articles:string,articlesCount:number}) => {
      this.articles=data.articles
    })
    // if(localStorage.getItem('token')!=null){
    //   this.articalService.setUserFeed()
    // }else{
    //   this.articalService.setGlobalFeed()
    // }
  }

}
