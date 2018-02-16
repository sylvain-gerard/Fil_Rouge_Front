import { Injectable } from '@angular/core';

@Injectable()
export class SidenavService {
  sideNav: any = false;


  constructor() {}

  toggleNav() {
    this.sideNav=!this.sideNav;
  }
}
