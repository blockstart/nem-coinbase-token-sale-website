import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.scss']
})
export class UsdComponent {

  @Input() cacheAmount = 0;
  @Input() recipientAddress = 'No Address Supplied';

  readonly paymentInfo = {
    header: 'Paying with USD requires a <span class="font-bold">debit card</span> and a <span class="font-bold">' +
    '60 day escrow window</span> to prevent fraudulent purchases.',
    body1: 'You will be charged for your Cache tokens today, and be issued pending tokens in your Cache Wallet as a certificate of ' +
    'Cache ownership. After the 60 day window your Cache will be automatically transferred to your Cache wallet account.',
    body2: 'We are not responsible for any funds lost due to mistyped amounts or wallets. Please double check your entries carefully ' +
    'when completing purchase.',
    btnText: 'Pay with USD'
  };

}
