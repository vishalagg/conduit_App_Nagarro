import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { UserService } from '../user.service';
import { ProfileService } from './profile.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string
  image : string
  isFollowing : boolean
  loggedInUsername : string
  constructor(private articleService: ArticleService, private userService: UserService,
    private profileService: ProfileService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.userService.currentUsername.subscribe((data : any) => {
      this.loggedInUsername = data
    })

    this.route.paramMap.subscribe(
      params => {
        this.username = params['params'].username
        this.profileService.getUserProfile(this.username).subscribe((data : any) => {
          this.image = data.profile.image
          this.isFollowing = data.profile.following
        },error => {
          this.router.navigate(['/']);
        })
        this.articleService.setMyArticles(this.username)
      })
  }
}