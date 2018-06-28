import { Component, Input } from '@angular/core';
import { PurchaseOption } from '../../services/purchase-option/purchase-card.class';

@Component({
  selector: 'app-proudly-presents',
  templateUrl: './proudly-presents.component.html',
  styleUrls: ['./proudly-presents.component.scss']
})
export class ProudlyPresentsComponent {
  @Input() accepts: string;
  private _verifyVipStatus = false;
  private _currentOption: PurchaseOption;

  get verifyVipStatus(): boolean { return this._verifyVipStatus; }
  get currentOption(): PurchaseOption { return this._currentOption; }

  set verifyVipStatus(value: boolean) {
    this._verifyVipStatus = value;
  }

  proudlyAccepts = () => {
    this._verifyVipStatus = true;
  }
}
