import { Component } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduict';

  constructor(private articleService: ArticleService) {

  }

  onTagSelection(value) {
    console.log(value)
    this.articleService.getFeedByTag(value)
  }
}
