import {Component, Input, OnInit} from '@angular/core';
import {FieldGroupService} from '../field-group.service';
import {FieldDetailsService} from '../../field-details/field-details.service';

@Component({
  selector: 'app-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.scss']
})
export class FieldGroupComponent implements OnInit {

  @Input() fieldGroupName;
  numberOfInputs;
  associatedInput;

  constructor(private fieldGroupService: FieldGroupService, private fieldDetailsService: FieldDetailsService) {
    this.fieldDetailsService.labelName.subscribe(
      (name) => {
        this.associatedInput = name;
      }
    );
  }

  ngOnInit() {
    this.numberOfInputs = this.fieldGroupService.getAssociatedInputs(this.fieldGroupName);
  }

  onAddGroup() {
    this.numberOfInputs += 1;
    this.fieldGroupService.addInputToGroup(this.fieldGroupName, this.associatedInput);
  }

}
