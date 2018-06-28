import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-box',
  templateUrl: './partner-box.component.html',
  styleUrls: ['./partner-box.component.scss']
})
export class PartnerBoxComponent {

  @Input() img: string;
  @Input() description1: string;
  @Input() description2: string;
  @Input() linkUrl: string;

}
