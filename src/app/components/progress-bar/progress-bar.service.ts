import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS } from '../../../util/constants';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProgressBarService {

  constructor(private http: HttpClient) { }

  public retrieveProgress = (): Observable<ProgressReport> => {
    return Observable.create(observable => {
      const url = `${environment.api_url}${API_URLS.PROGRESS_BAR}usd`;
      this.http.get<ProgressReport>(url).subscribe(res => {
        observable.next(res);
      }, err => {
        observable.error(err);
      });
    });
  }
}

interface ProgressReport {
  amount: number;
  milestone: number;
}
