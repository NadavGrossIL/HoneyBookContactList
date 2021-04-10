import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../../models/Contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  getJobDescription(contact: Contact | undefined): string | undefined {
    let jobDescription: string | undefined;
    if (contact?.job && contact.company_name) {
      jobDescription = contact?.job + ' | ' + contact?.company_name;
    } else {
      jobDescription = contact?.job ? contact?.job : contact?.company_name;
    }
    return jobDescription;
  }
}
