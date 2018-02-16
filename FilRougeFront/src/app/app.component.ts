import { Component } from '@angular/core';
import {SidenavService} from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MCPD';
  
  constructor (public sideNavService: SidenavService){}
}
