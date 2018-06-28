import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../../util/constants';
import { environment } from '../../../../environments/environment';

export enum CoinbaseStatus {
  NEW = 'NEW',
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
  UNRESOLVED = 'UNRESOLVED',
  RESOLVED = 'RESOLVED'
}

export enum CoinbaseUnresolved {
  UNDERPAID = 'UNDERPAID',
  OVERPAID = 'OVERPAID',
  DELAYED = 'DELAYED',
  MULTIPLE = 'MULTIPLE',
  MANUAL = 'MANUAL',
  OTHER = 'OTHER'
}

export interface CoinbaseTimeline {
  time: string;
  status: CoinbaseStatus;
  context?: CoinbaseUnresolved;
}

export interface CoinbaseCharge {
  name: string;
  description: string;
  local_price: any;
  pricing_type: string;
  metadata: any;
  code?: string;
  logo_url?: string;
  hosted_url?: string;
  created_at?: string;
  expires_at?: string;
  timeline?: Array<CoinbaseTimeline>;
  pricing?: any;
  payments?: Array<any>;
  addresses?: any;
  active_element?: boolean;
}

export interface CoinbaseLookup {
  completed: Array<CoinbaseCharge>;
  problems: Array<CoinbaseCharge>;
  pending: Array<CoinbaseCharge>;
}

@Component({
  selector: 'app-lookup-body',
  templateUrl: './lookup-body.component.html',
  styleUrls: ['./lookup-body.component.scss']
})
export class LookupBodyComponent {
  address: string;
  activeAccordions: Array<boolean> = [false, false, false];
  transactionTypes: Array<string> = ['Completed', 'Problem', 'Pending'];
  allTransactions: Array<Array<CoinbaseCharge>> = [];

  constructor(private http: HttpClient) { }

  findClicked = () => {
      this.http.get<CoinbaseLookup>(`${environment.api_url}${API_URLS.LOOKUP_COINBASE}/${this.address}`)
        .subscribe((lookup: CoinbaseLookup) => {
        this.allTransactions.push(lookup.completed);
        this.allTransactions.push(lookup.problems);
        this.allTransactions.push(lookup.pending);
      }, err => {
          console.debug(err);
      });
  }

}
