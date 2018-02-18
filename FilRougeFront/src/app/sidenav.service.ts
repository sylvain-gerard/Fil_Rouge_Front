import { Injectable } from '@angular/core';

@Injectable()
export class SidenavService {
  sideNav: any = false;


  constructor() {}

  toggleNav(etat:boolean) {
    this.sideNav=!this.sideNav;
  }
}
