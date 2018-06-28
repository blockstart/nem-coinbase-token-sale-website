import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaymentManagerService } from '../../../../../services/payment-manager/payment-manager.service';
import { PaymentOption } from '../../../../../services/payment-manager/payment-option.enum';

@Component({
  selector: 'app-coinbase',
  templateUrl: './coinbase.component.html',
  styleUrls: ['./coinbase.component.scss']
})
export class CoinbaseComponent {

  @Input() cacheAmount = 0;
  @Input() recipientAddress = 'No Address Supplied';
  @Input() productId = '';
  @Output() cancelClicked = new EventEmitter<void>();

  private _coinbaseUrl = '';
  private _fetchingUrl = false;
  private payText = 'Pay through Coinbase';
  private fetchText = 'Fetching URL';
  private _termsAccepted = false;
  private _paymentInfo: PaymentInfoBody = {
    header: '<b>We are not responsible for any funds lost due to mistyped amounts or wallets.</b>',
    body1: 'Please double check your entries carefully when completing purchase.',
    body2: '',
    btnText: this.payText
  };

  get coinbaseUrl(): string { return this._coinbaseUrl; }
  get fetchingUrl(): boolean { return this._fetchingUrl; }
  get termsAccepted(): boolean { return this._termsAccepted; }
  get paymentInfo(): PaymentInfoBody { return this._paymentInfo; }

  set termsAccepted(value: boolean) { this._termsAccepted = value; }

  constructor(private paymentManager: PaymentManagerService) { }

  onTermsAccepted = (): void => {
    if (this.coinbaseUrl) {
      return;
    }
    this.payThroughCoinbase();
  }

  onPayClicked = (): void => {
    if (!this.coinbaseUrl) {
      return;
    }
    window.open(this.coinbaseUrl, '_blank');
  }

  onCancelClicked = (): void => {
    this.cancelClicked.emit();
  }

  private payThroughCoinbase = (): void => {
    this.paymentInfo.btnText = this.fetchText;
    this._fetchingUrl = true;
    this.paymentManager.attemptPayment(PaymentOption.COINBASE, this.productId, this.recipientAddress).subscribe(res => {
      this._coinbaseUrl = res as string;
      this._fetchingUrl = false;
      this.paymentInfo.btnText = this.payText;
    }, err => {
      this._coinbaseUrl = '';
      this._fetchingUrl = false;
      this.paymentInfo.btnText = this.payText;
      console.debug(err);
    });
  }

}

interface PaymentInfoBody {
  header: string;
  body1: string;
  body2: string;
  btnText: string;
}
