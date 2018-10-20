import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { TagsService } from './tags/tags.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduict';

  constructor(private articleService: ArticleService,private tagService: TagsService,
              private userSerive: UserService) {

  }

  ngOnInit(){
    	if(localStorage.getItem('token')!=null){
        this.userSerive.getCurrentUser().subscribe((user:{user: any}) => {
          this.userSerive.setUsername(user.user.username);
        })
      }
  }

  onTagSelection(value) {
    console.log(value)
    this.tagService.setTagName(value)
    this.articleService.getFeedByTag(value)
  }
}
