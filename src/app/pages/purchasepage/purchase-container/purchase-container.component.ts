import { Component } from '@angular/core';
import {PurchaseOption} from '../../../services/purchase-option/purchase-card.class';

@Component({
  selector: 'app-purchase-container',
  templateUrl: './purchase-container.component.html',
  styleUrls: ['./purchase-container.component.scss']
})
export class PurchaseContainerComponent {

  private _product: PurchaseOption;

  get product(): PurchaseOption { return this._product; }
  set product(value) { this._product = value; }

  productUpdated(newProduct: PurchaseOption) {
    this._product = newProduct;
  }



}
