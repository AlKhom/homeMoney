import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HAEvent} from '../../shared/models/event.model';
import * as moment from 'moment';
import {EventService} from '../../shared/services/event.service';
import {BillService} from '../../shared/services/bill.service';
import {Bill} from '../../shared/models/bill';

import 'rxjs/add/operator/mergeMap';
import {Message} from '../../../shared/models/message.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'ha-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {


  @Input() categories;
  message: Message;
  sub1: Subscription;
  sub2: Subscription;

  types = [
    {type: 'income', label: 'Income'},
    {type: 'outcome', label: 'Outcome'}
  ];

  constructor(private eventService: EventService, private billService: BillService) {
  }

  ngOnInit() {
    // console.log(this.categories);
    this.message = new Message('danger', '');
  }

  showMessage(text: string) {
    this.message.text = text;
    window.setTimeout(() => this.message.text = '', 3000);
  }

  onSubmit(form: NgForm) {
    let {type, amount, category, description} = form.value;
    if (amount < 0) amount *= -1;
    const haEvent = new HAEvent(type, amount, +category,
      moment().format('DD.MM.YY HH:mm:ss'), description);
    console.log(haEvent);

    this.sub1 = this.billService.getBill()
      .subscribe(
        (bill: Bill) => {
          let value = 0;
          console.log(bill);
          if (haEvent.type === 'outcome') {
            if (bill.value < amount) {
              this.showMessage(`Not enough money. Not enough ${amount - bill.value} `);
              return;
            }
            else {
              value = bill.value - amount;
            }
          }
          else {
            value = amount + bill.value;
          }
          this.sub2 = this.billService.updateBill({value, currency: bill.currency})
            .mergeMap(() =>
              this.eventService.addEvent(haEvent))
            .subscribe(() => {
              form.setValue(
                {
                  amount: 0,
                  description: '',
                  category: 1,
                  type: 'outcome'
                });
            });


        });
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
