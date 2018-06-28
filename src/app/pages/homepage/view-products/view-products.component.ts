import { Component } from '@angular/core';
import { ROUTES } from '../../../../util/constants';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent {

  readonly productsUrl = ROUTES.PLATFORMS_PAGE_URL;

}
