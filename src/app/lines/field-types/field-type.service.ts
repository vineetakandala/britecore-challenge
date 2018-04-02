import {FieldType} from './field-type.model';
import {Subject} from 'rxjs/Subject';


export class FieldTypeService {

  selectedType = new Subject();

  private fieldTypes: FieldType[] = [
    new FieldType('', 'Text', 'String of text', 'Free-form text input', 'text'),
    new FieldType('ion-android-calendar', 'Date', 'Standard ISO format date', 'Datepicker, with configurable format', 'date'),
    new FieldType('ion-model-s', 'VIN', 'Vehicle Identification Number', 'String of text', 'text'),
    new FieldType('ion-social-usd', 'Amount', 'Amount of money in USD', 'Number', 'number'),
    new FieldType('ion-ios-home', 'Property', 'Number of square feet', 'Number', 'number')
  ];

  getFieldTypes() {
    return this.fieldTypes.slice();
  }
}
