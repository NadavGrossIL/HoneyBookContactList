import {Component, Input} from '@angular/core';
import {Contact} from '../../models/Contact';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  @Input() contacts: Contact[] | undefined | null;
  @Input() nameSearchString = '';

  constructor() {
  }

  trackByFunction(index: number, contact: Contact): string {
    return contact.email;
  }

  isFoundOnSearchString(contact: Contact): boolean {
    return contact.name.toLowerCase().includes(this.nameSearchString.toLowerCase());
  }
}
