import { Component, Input } from '@angular/core';
import { NavItem } from './model/nav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @Input() public navItem: NavItem;

}
