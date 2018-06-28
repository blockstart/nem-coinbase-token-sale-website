import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-info-box',
  templateUrl: './left-info-box.component.html',
  styleUrls: ['./left-info-box.component.scss']
})

export class LeftInfoBoxComponent {

  @Input() revenue: string;
  @Input() title: string;
  @Input() description: string;
  @Input() iconUrl: string;
  @Input() barColor: string;
  @Input() fontColor: string;

}
