import {Subject} from 'rxjs/Subject';


export class TagGroupService {

  tags = new Subject();
  tagGroups = {
    'Vinmaster': ['Make', 'Model', 'Year', 'Odometer Miles', 'Accidents', 'Tickets'],
    'ISO': ['Date of Birth', 'Name', 'Health conditions', 'Allergies'],
    'Tag 3': ['Example tag1', 'Example tag2', 'Example tag3', 'Example tag4', 'Example tag5']
  };

  getTagGroups() {
    return Object.keys(this.tagGroups).slice();
  }

  getTags(tagGroup: string) {
    return this.tagGroups[tagGroup];
  }

}
