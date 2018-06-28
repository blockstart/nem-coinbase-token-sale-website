import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentType } from './payment-type.enum';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {
  @Input() cacheAmount = 0;
  @Input() productId = '';
  @Input() recipientAddress = 'No Address Provided';
  @Output() complianceSent = new EventEmitter<PaymentType>();

  private _tab = PaymentType.wallet;

  readonly paymentType = PaymentType;

  get tab(): string { return this._tab; }

  constructor() { }

  ngOnInit() { }

  setTab(tab: PaymentType) {
    this._tab = tab;
  }

  isSelected(tab: PaymentType) {
    return this.tab === tab;
  }

  onComplianceSent = (type: PaymentType) => {
    this.complianceSent.emit(type);
  }
}
