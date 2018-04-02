import {FieldDetails} from './field-details.model';
import {Subject} from 'rxjs/Subject';


export class FieldDetailsService {

  fieldDetailsChanged  = new Subject();
  labelName = new Subject();

  private fieldDetails: FieldDetails[] = [
    new FieldDetails('Enter your name', 'John Doe', 'name')
  ];

  getFieldDetails() {
    return this.fieldDetails.slice();
  }

  addFieldDetails(label: string, value: any, validate?: string ) {
    this.fieldDetails.push(new FieldDetails(label, value, validate));
    this.fieldDetailsChanged.next(this.fieldDetails);
    console.log('Updated field details: ');
    console.log(this.fieldDetails);
  }

  cancelLastChange() {
    this.fieldDetails.pop();
    this.fieldDetailsChanged.next(this.fieldDetails);
    console.log('Cancelled the changes! Field Details now: ');
    console.log(this.fieldDetails);
  }
}
