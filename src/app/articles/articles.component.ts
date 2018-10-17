import { Component, OnInit } from '@angular/core';
import { TagsService } from '../tags/tags.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  tagName : string
  loadedTagBtn : boolean
  constructor(private tagService: TagsService,private articleService : ArticleService) { }

  ngOnInit() {
    this.tagService.getTagName().subscribe((tagName) => {
      this.tagName = tagName
    })
  }

  getTagName() {
    this.loadedTagBtn = true;
    return this.tagService.getTagName()
  }

  getFeed(feedSource){
    feedSource=='user'? this.articleService.setUserFeed() : this.articleService.setGlobalFeed();
    this.tagService.setTagName(null);

  }

}
