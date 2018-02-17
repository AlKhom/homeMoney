import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {Bill} from '../shared/models/bill';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'ha-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscription1: Subscription;
  subscription2: Subscription;
  currency;
  bill: Bill;
  isLoaded = false;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.subscription1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrencyRate())
      .subscribe((data: [Bill, any]) => {
        this.isLoaded = true;
        this.currency = data[1];
        this.bill = data[0];
      });
  }

  onRefresh() {
    this.isLoaded = false;
   this.subscription2 =  this.billService.getCurrencyRate()
     .delay(1000)
     .subscribe((currency) => {
      this.currency = currency;
      this.isLoaded = true;
    });
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}

