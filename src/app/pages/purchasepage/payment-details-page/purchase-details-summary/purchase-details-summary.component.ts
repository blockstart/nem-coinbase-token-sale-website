import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-details-summary',
  templateUrl: './purchase-details-summary.component.html',
  styleUrls: ['./purchase-details-summary.component.scss']
})
export class PurchaseDetailsSummaryComponent {

  @Input() cacheAmount = 0;
  @Input() recipientAddress = 'No Address Provided';

}
