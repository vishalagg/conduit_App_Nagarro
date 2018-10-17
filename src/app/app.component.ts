import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { TagsService } from './tags/tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduict';

  constructor(private articleService: ArticleService,private tagService: TagsService) {

  }

  onTagSelection(value) {
    console.log(value)
    this.tagService.setTagName(value)
    this.articleService.getFeedByTag(value)
  }
}
