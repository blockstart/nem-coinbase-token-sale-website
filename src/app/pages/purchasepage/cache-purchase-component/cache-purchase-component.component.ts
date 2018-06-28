import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PurchaseOption} from '../../../services/purchase-option/purchase-card.class';
import {PurchaseOptionService} from '../../../services/purchase-option/purchase-option.service';
import {ActivatedRoute} from '@angular/router';
import {QUERY_PARAMS} from '../../../../util/constants';

@Component({
  selector: 'app-cache-purchase-component',
  templateUrl: './cache-purchase-component.component.html',
  styleUrls: ['./cache-purchase-component.component.scss']
})
export class CachePurchaseComponentComponent implements OnInit {

  readonly cacheCost = 0.020;

  @Output() product = new EventEmitter<PurchaseOption>();
  private _purchaseOptions = Array<PurchaseOption>();
  private _selectedOption: PurchaseOption;

  get purchaseOptions(): Array<PurchaseOption> { return this._purchaseOptions; }
  get selectedOption(): PurchaseOption { return this._selectedOption; }

  set selectedOption(value: PurchaseOption) {
    this._selectedOption = value;
  }

  constructor(private purchaseOptionService: PurchaseOptionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.purchaseOptionService.getCards().subscribe(res => {
      this._purchaseOptions = res;
      this.fetchSelectedOption();
    }, err => {
      console.log(err);
    });
  }

  public updateOption = (option: PurchaseOption) => {
    this._selectedOption = option;
    this.product.emit(option);
  }

  private fetchSelectedOption = () => {
    this.activatedRoute.queryParams.subscribe(params => {
      const productId = params[QUERY_PARAMS.PRODUCT];
      this._selectedOption = this._purchaseOptions.find(x => x.id === productId);
      if (!this._selectedOption) {
        this._selectedOption = this._purchaseOptions[0];
      }
      this.product.emit(this._selectedOption);
    });
  }

}
