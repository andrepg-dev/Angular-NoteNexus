import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent implements OnInit {
  public boolean = window.localStorage.getItem('sideBar') === 'true' ? true : false;

  showMenu() {
    this.boolean = !this.boolean;
    window.localStorage.setItem('sideBar', this.boolean.toString());
  }

  ngOnInit(): void {
    if (document.body.clientWidth < 765) {
      this.boolean = true;
    }
  }
}
