import { Component, OnInit } from '@angular/core';
import {FieldType} from './field-type.model';
import {FieldTypeService} from './field-type.service';

@Component({
  selector: 'app-field-types',
  templateUrl: './field-types.component.html',
  styleUrls: ['./field-types.component.scss']
})
export class FieldTypesComponent implements OnInit {

  fieldTypes: FieldType[];

  constructor(private fieldTypeService: FieldTypeService) { }

  ngOnInit() {
    this.fieldTypes = this.fieldTypeService.getFieldTypes();
  }

}
