import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ha-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() currency;
  @Input() bill;

  dollar: number;
  euro: number;

  constructor() {
  }

  ngOnInit() {
    const {rates} = this.currency;
    this.dollar = rates['USD'] * this.bill.value;
    this.euro = rates['EUR'] * this.bill.value;
    console.log(this.dollar);
  }

}
