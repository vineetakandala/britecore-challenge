import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {FieldTypeService} from '../field-types/field-type.service';
import {NgForm} from '@angular/forms';
import {FieldDetailsService} from './field-details.service';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss']
})
export class FieldDetailsComponent implements OnInit {

  inputType;
  @ViewChild('f') fieldDetailsForm: NgForm;
  labelText = '';
  regexp = /\s/g;
  replacer = '-';

  constructor(private fieldTypeService: FieldTypeService, private fieldDetailsService: FieldDetailsService) { }

  ngOnInit() {
    this.fieldTypeService.selectedType.subscribe(
      (type: string) => {
        this.inputType = type;
      });
    this.fieldDetailsService.labelName.next(this.fieldDetailsForm.value.label);
  }

  onAppDetails() {
    this.fieldDetailsService.addFieldDetails(
      this.fieldDetailsForm.value.label,
      this.fieldDetailsForm.value.value,
      this.fieldDetailsForm.value.validate
    );
    this.fieldDetailsForm.reset();
  }

  onCancelChanges(){
    this.fieldDetailsService.cancelLastChange();
  }

  onDeleteInput() {
    this.fieldDetailsForm.reset();
  }
}
