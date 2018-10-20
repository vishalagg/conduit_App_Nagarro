import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { ArticleService } from '../../article.service';
// import { EventEmitter } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles : any
  @Output() totalArticleEvent = new EventEmitter()
  totalArticle : number
  constructor(private articalService: ArticleService) { }

  ngOnInit() {
    this.articalService.getFeed().subscribe((data : {articles:string,articlesCount:number}) => {
      this.articles=data.articles
      this.totalArticle = data.articlesCount
    })
  }

  pageChanged(event: any) : void {
    this.totalArticleEvent.emit(event) 
    // console.log(event);
      
  }
}
