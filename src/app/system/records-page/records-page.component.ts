import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ha-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  newAddedCategory(event) {
    console.log(event);
  }
}
