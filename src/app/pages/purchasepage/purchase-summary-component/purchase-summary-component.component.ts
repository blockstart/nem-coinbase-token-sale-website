import { Component, Input } from '@angular/core';
import { EXTERNAL_URLS, QUERY_PARAMS, ROUTES } from '../../../../util/constants';
import { PurchaseOption } from '../../../services/purchase-option/purchase-card.class';
import { PaymentManagerService } from '../../../services/payment-manager/payment-manager.service';
import { PaymentOption } from '../../../services/payment-manager/payment-option.enum';
import { NavigationExtras, Router } from '@angular/router';
import { Address } from 'nem-library';

@Component({
  selector: 'app-purchase-summary-component',
  templateUrl: './purchase-summary-component.component.html',
  styleUrls: ['./purchase-summary-component.component.scss']
})
export class PurchaseSummaryComponentComponent {
  @Input() product: PurchaseOption;

  private _walletAddress = '';
  private _addressCopied = false;
  private _walletAddressValid = false;

  get walletAddress(): string { return this._walletAddress; }
  get walletAddressValid(): boolean { return this._walletAddressValid; }

  set walletAddress(value: string) {
    this._walletAddress = value;
    this.checkAddressValidity();
  }

  readonly xem = PaymentOption.XEM;
  readonly coinbase = PaymentOption.COINBASE;
  readonly cacheWalletUrl = EXTERNAL_URLS.CACHE_WALLET;
  readonly tutorialUrl = EXTERNAL_URLS.CRYPTO_WALKTHROUGH_TUTORIAL;

  constructor(private paymentManagerService: PaymentManagerService,
              private route: Router) { }

  purchaseClicked = () => {
    const navigationExtras: NavigationExtras = {queryParams: {}};
    navigationExtras.queryParams[QUERY_PARAMS.CACHE_AMOUNT] = this.product.numTokens;
    navigationExtras.queryParams[QUERY_PARAMS.ADDRESS] = this._walletAddress;
    navigationExtras.queryParams[QUERY_PARAMS.PRODUCT] = this.product.id;
    this.route.navigate([ROUTES.PURCHASE_DETAILS], navigationExtras);
  }

  copy = (text: string) => {
    this.copyText(text);
    this._addressCopied = true;
    setTimeout(() => {
      this._addressCopied = false;
    }, 1500);
  }

  private copyText = (text: string) => {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  private checkAddressValidity = () => {
    try {
      const address = new Address(this._walletAddress);
      this._walletAddressValid = !!address;
    } catch (e) {
      console.debug(e);
      this._walletAddressValid = false;
    }
  }
}
