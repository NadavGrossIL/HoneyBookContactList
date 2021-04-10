import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() onSearchBarTextChange = new EventEmitter<any>();

  constructor() {
  }

  public onChange(event: KeyboardEvent): void {
    this.onSearchBarTextChange.emit((event.target as HTMLTextAreaElement).value);
  }
}
