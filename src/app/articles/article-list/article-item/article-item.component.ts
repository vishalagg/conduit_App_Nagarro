import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../../article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article : any
  articles : any 
  totalArticle : number
  constructor(private articleService : ArticleService) {

   }

  ngOnInit() {
    // this.articleService.getFeed().subscribe((data : {articles:string,articlesCount:number}) => {
    //   this.articles=data.articles
    //   this.totalArticle = data.articlesCount
    // })
  }

  switchFav(isFav,article:any) {
    if(isFav="fav") {
      this.articleService.favouriteArticle(article.slug).subscribe((data : any) => {
        this.article = data.article
      })
    }else if(isFav="unfav") {
      this.articleService.unFavouriteArticle(article.slug).subscribe((data : any) => {
        this.article = data.article
      })
    }
  }
}
