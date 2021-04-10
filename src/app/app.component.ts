import {Component, OnInit} from '@angular/core';
import {ApiDataService} from '../services/api-data.service';
import {Contact} from '../models/Contact';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'honeybook';

  public contacts$: Observable<Contact[]> | null | undefined;
  public nameSearchString = '';

  constructor(private apiDataService: ApiDataService) {
  }

  ngOnInit(): void {
    this.initContactsData();
  }

  initContactsData(): void {
    this.contacts$ = this.apiDataService.getContacts();
  }

  updateNameSearchString(name: string): void {
    this.nameSearchString = name;
  }
}
