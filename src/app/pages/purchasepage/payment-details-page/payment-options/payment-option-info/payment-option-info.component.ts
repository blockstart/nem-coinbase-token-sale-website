import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-option-info',
  templateUrl: './payment-option-info.component.html',
  styleUrls: ['./payment-option-info.component.scss']
})
export class PaymentOptionInfoComponent {

  @Input() infoHeader: string;
  @Input() infoBody1: string;
  @Input() infoBody2: string;
  @Input() btnText: string;

}
