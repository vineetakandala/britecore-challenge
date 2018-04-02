import {AfterContentChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FieldType} from '../field-type.model';
import {FieldTypeService} from '../field-type.service';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.scss']
})
export class FieldTypeComponent implements OnInit {

  @Input() fieldType: FieldType;

  hovered = false;

  constructor(private fieldTypeService: FieldTypeService) {}

  ngOnInit() {
  }

  typeOfInput(type) {
    this.fieldTypeService.selectedType.next(type);
    console.log(type);
  }

}
