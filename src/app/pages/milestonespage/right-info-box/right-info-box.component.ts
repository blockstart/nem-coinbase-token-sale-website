import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-info-box',
  templateUrl: './right-info-box.component.html',
  styleUrls: ['./right-info-box.component.scss']
})
export class RightInfoBoxComponent {

  @Input() revenue: string;
  @Input() title: string;
  @Input() description: string;
  @Input() iconUrl: string;
  @Input() barColor: string;
  @Input() fontColor: string;

}
