import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagsService } from './tags.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags : any
  @Output() isTagSelected = new EventEmitter<string>();
  constructor(private articleService: ArticleService , private tagService: TagsService) { }

  ngOnInit() {
    this.tagService.getGlobalTags().subscribe((data : {tags:string}) => {
      this.tags=data.tags
    });
  }

  tagSelected(tag){
    this.isTagSelected.emit(tag)
  }

  onTagSelection(value) {
    this.tagService.setTagName(value)
    this.articleService.getFeedByTag(value)
  }
}
