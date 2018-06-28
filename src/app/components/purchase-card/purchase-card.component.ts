import { Component, OnInit } from '@angular/core';
import { PurchaseOption } from '../../services/purchase-option/purchase-card.class';
import { PurchaseOptionService } from '../../services/purchase-option/purchase-option.service';

export enum KEY_CODE {
  ESC = 27,
}

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss']
})
export class PurchaseCardComponent implements OnInit {
  private _purchaseOptions: Array<PurchaseOption> = [];
  private _verifyVipStatus = false;
  private _currentOption: PurchaseOption;

  get purchaseOptions(): Array<PurchaseOption> {
    return this._purchaseOptions;
  }

  get verifyVipStatus(): boolean {
    return this._verifyVipStatus;
  }

  set verifyVipStatus(value: boolean) {
    this._verifyVipStatus = value;
  }

  get currentOption(): PurchaseOption {
    return this._currentOption;
  }

  readonly rules = {
    phone: '(max-width: 767px)',
    desktop: '(min-width: 768px)'
  };

  constructor(private purchaseCardService: PurchaseOptionService) {
  }

  ngOnInit() {
    this.purchaseCardService.getCards().subscribe(res => {
      this._purchaseOptions = res;
    }, err => {
      console.debug(err);
    });
  }

  public purchase = (option: PurchaseOption) => {
    this._verifyVipStatus = true;
    this._currentOption = option;
  }

  isPhone = () => {
    return window.matchMedia(this.rules.phone).matches;
  }

  isDesktop = () => {
    return window.matchMedia(this.rules.desktop).matches;
  }
}
