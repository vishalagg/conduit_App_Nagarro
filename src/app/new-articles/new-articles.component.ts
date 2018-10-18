import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { UserService } from '../user.service';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new-articles',
  templateUrl: './new-articles.component.html',
  styleUrls: ['./new-articles.component.css']
})
export class NewArticlesComponent implements OnInit {

  articleForm: FormGroup
  articleData: any
  slug: string
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private articleService: ArticleService, private route: ActivatedRoute,
    private router: Router) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])],
      tagList: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.slug = params['params'].slug
        if (this.slug != null) {
          this.articleService.getArticleDetails(this.slug).subscribe((data: any) => {
            this.articleData = data.article;
            this.articleForm.setValue({title: this.articleData.title, 
                                       description: this.articleData.description,
                                       body: this.articleData.body,
                                       tagList: this.articleData.tagList})
          })
        }
      }
    )
  }

  postArticle() {
    if (this.slug == null) { 
      this.articleService.createArticle(this.articleForm.value).subscribe((response:{article:any}) => {
        console.log(response);
        this.router.navigate([`/profile/${response.article.author.username}`])
      });
    } else {
      this.articleService.updateArticle(this.articleForm.value, this.slug).subscribe((response:{article:any}) => {
        console.log(response);
        this.router.navigate([`/profile/${response.article.author.username}`])
      })
    }
    
  }
}
