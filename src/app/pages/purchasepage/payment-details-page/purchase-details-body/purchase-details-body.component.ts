import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QUERY_PARAMS } from '../../../../../util/constants';
import { PurchaseOptionService } from '../../../../services/purchase-option/purchase-option.service';
import { PaymentManagerService } from '../../../../services/payment-manager/payment-manager.service';
import { PaymentOption } from '../../../../services/payment-manager/payment-option.enum';
import { PaymentType } from '../payment-options/payment-type.enum';

@Component({
  selector: 'app-purchase-details-body',
  templateUrl: './purchase-details-body.component.html',
  styleUrls: ['./purchase-details-body.component.scss']
})
export class PurchaseDetailsBodyComponent implements OnInit {
  private _recipientAddress: string;
  private _cacheAmount: number;
  private _transferCurrency = PaymentOption.XEM;
  private _productId = '';
  private _remainingMin = 0;
  private _remainingSec = 0;
  private _endTime: Date;
  private _showingTransferInfo = false;
  private _copyAddress: string;
  private _copyAmount: number;
  private _copyMessage: string;
  private _state: PurchaseState = PurchaseState.filingKYC;

  get remainingMin(): number { return this._remainingMin; }
  get remainingSec(): number { return this._remainingSec; }
  get showingTransferInfo(): boolean { return this._showingTransferInfo; }
  get copyAddress(): string { return this._copyAddress; }
  get copyAmount(): number { return this._copyAmount; }
  get copyMessage(): string { return this._copyMessage; }
  get productId(): string { return this._productId; }
  get state(): PurchaseState { return this._state; }

  readonly purchaseState = PurchaseState;

  readonly paymentInfo = {
    header: '<b>NEVER send XEM from an exchange (e.g. Binance or Changelly). First send the XEM from an exchange to your Nano Wallet. ' +
    'Then purchase Cache from your personal wallet.</b>',
    body1: 'We are not responsible for any funds lost due to mistyped amounts or wallets. Please double check your entries carefully ' +
    'when completing purchase.',
    body2: '',
    btnText: 'Start Payment'
  };

  paymentFields = {
    s1Title: 'Send payment to this',
    s2Title: 'Send this amount',
    s3Title: 'Input Message',
    s1icon: '../../../../../assets/step1-icon.svg',
    s2icon: '../../../../../assets/step2-icon.svg',
    s3icon: '../../../../../assets/step3-icon.svg',
    message: '(Don\'t forget to do this! Failure to do so will result in loss of funds)',
    address: 'XEM Address'
  };

  get recipientAddress(): string { return this._recipientAddress; }
  get cacheAmount(): number { return this._cacheAmount; }

  constructor(private activatedRoute: ActivatedRoute,
              private ps: PurchaseOptionService,
              private paymentManager: PaymentManagerService) { }

  ngOnInit() {
    this.fetchQueryParams();
  }

  cancelForm = () => {
    this._state = PurchaseState.filingKYC;
  }

  onComplianceSent = (paymentType: PaymentType) => {
    console.log(paymentType);
    switch (paymentType) {
      case PaymentType.wallet:
        this._state = PurchaseState.buyingWithWallet;
        break;
      case PaymentType.usd:
        this._state = PurchaseState.buyingWithUSD;
        break;
      case PaymentType.coinbase:
        this._state = PurchaseState.buyingWithCoinbase;
        break;
    }
  }

  onStartPayment = () => {
    switch (this._transferCurrency) {
      case 'XEM':
      default:
        this.paymentManager.attemptPayment(this._transferCurrency, this._productId, this._recipientAddress).subscribe(res => {
          this._copyAddress = res.cacheAddress;
          this._copyAmount = res.xemAmount;
          this._copyMessage = res.message;
          this._showingTransferInfo = true;
          this.startTimer();
        }, err => {
          console.debug(err);
        });
        break;
    }
  }

  private fetchQueryParams = () => {
    this.activatedRoute.queryParams.subscribe(params => {
      this._recipientAddress = params[QUERY_PARAMS.ADDRESS];
      this._cacheAmount = params[QUERY_PARAMS.CACHE_AMOUNT] as number;
      this._productId = params[QUERY_PARAMS.PRODUCT];
    });
  }

  startTimer = () => {
    const currentTime = new Date(Date.now());
    this._endTime = new Date(currentTime.getTime() + 15 * 60000);
    this.updateCountdown();
  }

  private updateCountdown = (): void => {
    const time = this.calcTime();
    this._remainingSec = Math.floor((time / 1000) % 60);
    this._remainingMin = Math.floor((time / 1000 / 60) % 60);
    if (time > 0) {
      setTimeout(() => { this.updateCountdown(); }, 100);
    } else if (time <= 0) {
      this._showingTransferInfo = false;
    }
  }

  private calcTime(): number {
    const currentDateString = new Date(Date.now()).toUTCString();
    const currentDate = new Date(currentDateString);
    return this._endTime.getTime() - currentDate.getTime();
  }

}

enum PurchaseState {
  buyingWithWallet,
  buyingWithCoinbase,
  buyingWithUSD,
  filingKYC
}
