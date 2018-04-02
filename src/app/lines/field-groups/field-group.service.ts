import {Subject} from 'rxjs/Subject';

export class FieldGroupService {

  private fieldGroups = {
    'Rental Vehicle Coverage Package': ['ExampleInput1', 'ExampleInput2']
  };

  getFieldGroupNames() {
    return Object.keys(this.fieldGroups);
  }

  getAssociatedInputs(key) {
    return this.fieldGroups[key].length;
  }

  addInputToGroup(key, input) {
    this.fieldGroups[key].push(input);
  }
}
