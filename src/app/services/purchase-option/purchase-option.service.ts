import { PurchaseOption } from './purchase-card.class';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { API_URLS } from '../../../util/constants';

@Injectable()
export class PurchaseOptionService {

  private tokenUrl = '../../../assets/cacheLogo-dark.svg';

  constructor(private http: HttpClient) { }

  getCards = (): Observable<Array<PurchaseOption>> => {
    return Observable.create(obs => {
      const productUrl = `${environment.api_url}${API_URLS.PRODUCTS}`;
      this.http.get<Array<Result>>(productUrl).subscribe(result => {
        const products = Array<PurchaseOption>();
        for (const product of result) {
          products.push(new PurchaseOption(product.cacheAmount, product.priceUSD, product.coinbaseProductId,
            product._id, product.isEnabled, this.tokenUrl));
        }
        obs.next(products);
      }, err => {
        obs.error(err);
      });
    });
  }

}

interface Result {
  _id: string;
  priceUSD: number;
  cacheAmount: number;
  coinbaseProductId: string;
  isEnabled: boolean;
}
