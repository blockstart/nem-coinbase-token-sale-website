import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet-transfer-icons',
  templateUrl: './wallet-transfer-icons.component.html',
  styleUrls: ['./wallet-transfer-icons.component.scss']
})
export class WalletTransferIconsComponent {

  readonly optionImageUrls = [
    {url: '../../../../../../assets/xem-logo.svg', enabled: true},
    {url: '../../../../../../assets/bitcoin-logo.svg', enabled: false},
    {url: '../../../../../../assets/ethereum-logo.svg', enabled: false},
    {url: '../../../../../../assets/litecoin-logo.svg', enabled: false}
  ];

}
