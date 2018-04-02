import {Component, OnInit} from '@angular/core';
import {TagGroupService} from './tag-group.service';

@Component({
  selector: 'app-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.scss']
})
export class TagGroupComponent implements OnInit {
  tagGroups = [];
  // tags = [];

  constructor(private tagGroupService: TagGroupService) { }

  ngOnInit() {
    this.tagGroups = this.tagGroupService.getTagGroups();
  }

  displayTags(tagGroup: string){
    this.tagGroupService.tags.next(tagGroup);
  }

}
