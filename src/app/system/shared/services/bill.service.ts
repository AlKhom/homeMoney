import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {
  }

  getBill():  Observable<any> {
    return this.http.get('http://localhost:3000/bill');
  }
  getCurrencyRate(currency: any = 'RUB'): Observable<any> {
    return this.http.get(`https://api.fixer.io/latest?base=${currency}`);
  }
}
