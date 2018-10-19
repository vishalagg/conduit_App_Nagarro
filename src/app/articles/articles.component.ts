import { Component, OnInit, Input } from '@angular/core';
import { TagsService } from '../tags/tags.service';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  tagName : string
  loadedTagBtn : boolean
  localStorageObj : Object
  classIndex : number
  @Input() parent : string

  constructor(private tagService: TagsService,private articleService : ArticleService,
              private route : ActivatedRoute) {
               }

  ngOnInit() {
    this.classIndex = 1
    this.tagService.getTagName().subscribe((tagName) => {
      this.tagName = tagName
    })
    this.localStorageObj = localStorage
  }

  getTagName() {
    this.loadedTagBtn = true;
    return this.tagService.getTagName()
  }

  getFeed(feedSource){
    if(feedSource==='user'){
      this.classIndex = 1
      this.articleService.setUserFeed()
    }else if(feedSource==='global'){
      this.classIndex = this.localStorageObj? 2 : 1
      this.articleService.setGlobalFeed()
    }else if(feedSource==='myFeed'){
      this.classIndex = 1
      this.route.paramMap.subscribe(
        params => {
          this.articleService.setMyArticles( params['params'].username)
        })
    }else if(feedSource==='favourite'){
      this.classIndex = 3
      this.route.paramMap.subscribe(
        params => {
          this.articleService.setFavouriteFeed( params['params'].username)
        })
    }
    this.tagService.setTagName(null);
  }
}
