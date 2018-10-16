import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagsService } from './tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags : any
  @Output() isTagSelected = new EventEmitter<string>();
  constructor(private getTag : TagsService) { }

  ngOnInit() {
    this.getTag.getGlobalTags().subscribe((data : {tags:string}) => {
      this.tags=data.tags
      console.log(this.tags);
    });
  }

  tagSelected(tag){
    this.isTagSelected.emit(tag)
  }
}
