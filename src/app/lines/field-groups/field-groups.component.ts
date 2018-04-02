import { Component, OnInit } from '@angular/core';
import {FieldGroupService} from './field-group.service';

@Component({
  selector: 'app-field-groups',
  templateUrl: './field-groups.component.html',
  styleUrls: ['./field-groups.component.scss']
})
export class FieldGroupsComponent implements OnInit {
  groupNames = [];

  constructor(private fieldGroupService: FieldGroupService) { }

  ngOnInit() {
    this.groupNames = this.fieldGroupService.getFieldGroupNames();
    console.log(this.groupNames)
  }

}
