import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.articleService.setUserFeed()
    }else{
      this.articleService.setGlobalFeed()
    }
  }

}
