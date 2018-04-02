import {Component, OnDestroy, OnInit} from '@angular/core';
import {TagGroupService} from '../tag-group.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {

  tagGroupSelected = false;
  tags = [];

  constructor(private tagGroupService: TagGroupService) { }

  ngOnInit() {
    this.tagGroupService.tags.subscribe(
      (tagGroup: string) => {
        this.tags = this.tagGroupService.getTags(tagGroup);
        this.tagGroupSelected = true;
      }
    );
  }

  ngOnDestroy() {
    this.tagGroupService.tags.unsubscribe();
  }

}
