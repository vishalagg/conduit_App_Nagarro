import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './header/nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleItemComponent } from './articles/article-list/article-item/article-item.component';
import { TagsComponent } from './tags/tags.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { NewArticlesComponent } from './new-articles/new-articles.component';
import { ProfileComponent } from './profile/profile.component';
import { HelperComponent } from './profile/helper/helper.component';
import { PaginationModule } from 'ngx-bootstrap';

const routes : Routes = [
  {path : '', component: HomeComponent},
  {path : 'article/:slug', component: ArticleDetailComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'signin', component: SigninComponent},
  {path: 'newarticle', component: NewArticlesComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'edit/:slug', component: NewArticlesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ArticlesComponent,
    ArticleListComponent,
    ArticleItemComponent,
    TagsComponent,
    ArticleDetailComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NewArticlesComponent,
    ProfileComponent,
    HelperComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
