import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private _opened: boolean = false

  constructor() { }

  get opened(): boolean { return this._opened}

  set opened(opened: boolean) {
    this._opened = opened
  }

  get openedText(): string { return this._opened ? 'Opened' : 'Closed' }

  public toggleSidebar() {
    this.opened = !this.opened
  }

  ngOnInit(): void {
  }
}
