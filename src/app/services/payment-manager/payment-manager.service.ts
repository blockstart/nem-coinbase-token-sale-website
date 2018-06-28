import { Injectable } from '@angular/core';
import { PaymentOption } from './payment-option.enum';
import { PurchaseOption } from '../purchase-option/purchase-card.class';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../util/constants';
import { XemPaymentDetails } from './XemPaymentDetails';
import { environment } from '../../../environments/environment';

@Injectable()
export class PaymentManagerService {

  constructor(private http: HttpClient) { }

  public attemptPayment = (paymentOption: PaymentOption, productObj: PurchaseOption | string, walletAddress: string): Observable<any> => {
    return Observable.create(observable => {
      const product: string = (<PurchaseOption> productObj).id || productObj.toString();
      switch (paymentOption) {
        case PaymentOption.COINBASE:
          this.payCoinbase(product, walletAddress).subscribe(res => {
            observable.next(res);
          }, err => {
            observable.error(err);
          });
          break;
        case PaymentOption.XEM:
          this.payXEM(product, walletAddress).subscribe(res => {
            observable.next(res);
          }, err => {
            observable.error(err);
          });
          break;
      }
    });
  }

  private payCoinbase = (product: string, address: string): Observable<string> => {
    return Observable.create(observable => {
      const body = {
        senderCacheAddress: address,
        productId: product
      };
      const paymentUrl = `${environment.api_url}${API_URLS.START_COINBASE_PURCHASE}`;
      this.http.post(paymentUrl, body, {responseType: 'text'}).subscribe(res => {
        observable.next(res);
      }, err => {
        observable.error(err);
      });
    });
  }

  private payXEM = (product: string, walletAddress: string): Observable<XemPaymentDetails> => {
    return Observable.create(observable => {
      const body = {
        senderCacheAddress: walletAddress,
        productId: product,
        tokenType: 'XEM'
      };
      const paymentApiUrl = `${environment.api_url}${API_URLS.XEM_PAYMENT}`;
      this.http.post<{cacheAddress: string, usdValue: number, xemAmount: number, message: string}>(paymentApiUrl, body)
        .subscribe(result => {
        const newInfo = new XemPaymentDetails(result.cacheAddress, result.usdValue, result.xemAmount, result.message);
        observable.next(newInfo);
      }, err => {
        observable.error(err);
      });
    });
  }

  public uploadKycInfo = (infoSheet: KycInfoSheet): Observable<any> => {
    return Observable.create(observable => {
      const formData = new FormData();
      formData.append('fullName', infoSheet.fullName);
      formData.append('address1', infoSheet.address1);
      formData.append('address2', infoSheet.address2);
      formData.append('city', infoSheet.city);
      formData.append('state', infoSheet.state);
      formData.append('zipCode', infoSheet.zipCode);
      formData.append('country', infoSheet.country);
      formData.append('senderCacheAddress', infoSheet.senderCacheAddress);
      formData.append('proofOfResidencePath', infoSheet.proofOfResidencePath,
                    `${infoSheet.senderCacheAddress}-${infoSheet.proofOfResidencePath.name}`);
      formData.append('legalPhotoIdPath', infoSheet.photoIdPath,
                    `${infoSheet.senderCacheAddress}-${infoSheet.photoIdPath.name}`);
      formData.append('personalPictureHoldingIdPath', infoSheet.photoWithIdPath,
                    `${infoSheet.senderCacheAddress}-${infoSheet.photoWithIdPath.name}`);

      const kycUrl = `${environment.api_url}${API_URLS.KYC}`;
      this.http.put(kycUrl, formData).subscribe(res => {
        observable.next(res);
      }, err => {
        observable.error(err);
      });
    });
  }
}

export interface KycInfoSheet {
  fullName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  senderCacheAddress: string;
  photoWithIdPath: any;
  photoIdPath: File;
  proofOfResidencePath: File;
}
