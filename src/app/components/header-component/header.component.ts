import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class TheHeaderComponent {

  @Input() headerTitle: string;
  @Input() headerSubTitle: string;
  @Input() headerClass: string;

}
