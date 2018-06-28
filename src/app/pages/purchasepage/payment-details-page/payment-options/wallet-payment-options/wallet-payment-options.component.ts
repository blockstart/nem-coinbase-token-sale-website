import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet-payment-options',
  templateUrl: './wallet-payment-options.component.html',
  styleUrls: ['./wallet-payment-options.component.scss']
})
export class WalletPaymentOptionsComponent {

  private _tab: OptionTab = OptionTab.XEM;

  get tab(): string { return this._tab; }

  readonly optionTabs = OptionTab;

  setTab(tab: OptionTab) {
    this._tab = tab;
  }

  isSelected(tab: OptionTab) {
    return this.tab === tab;
  }

}

enum OptionTab {
  XEM = 'xem',
  BTC = 'btc',
  LTC = 'ltc',
  ETH = 'eth'
}
