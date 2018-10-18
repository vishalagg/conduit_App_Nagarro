import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { UserService } from '../user.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-new-articles',
  templateUrl: './new-articles.component.html',
  styleUrls: ['./new-articles.component.css']
})
export class NewArticlesComponent implements OnInit {
  
  articleForm : FormGroup 
  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private articleService: ArticleService) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])],
      tagList : ['', Validators.compose([Validators.required])]
    });
   }

  ngOnInit() {
  }

  postArticle() {
    this.articleService.createArticle(this.articleForm.value).subscribe((response) => {
      console.log(response);
      
    });
    
  }
}
