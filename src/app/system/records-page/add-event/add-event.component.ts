import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HAEvent} from '../../shared/models/event.model';
import * as moment from 'moment';

@Component({
  selector: 'ha-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Input() categories;

  types = [
    {type: 'income', label: 'Income'},
    {type: 'outcome', label: 'Outcome'}
  ];

  constructor() {
  }

  ngOnInit() {
    console.log(this.categories);
  }

  onSubmit(form: NgForm) {
    let {type, amount, category, description} = form.value;
    if (amount < 0) amount *= -1;
    let haEvent = new HAEvent(type, amount, +category,
      moment().format('DD.MM.YY HH:mm:ss'), description);
    console.log(haEvent);
  }

}
