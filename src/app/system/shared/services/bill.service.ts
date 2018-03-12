import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill';
import {BaseApi} from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  getCurrencyRate(currency: any = 'RUB'): Observable<any> {
    return this.http.get(`https://api.fixer.io/latest?base=${currency}`);
  }

  updateBill(bill: Bill): Observable<any> {
    return this.put('bill', bill);
  }
}
