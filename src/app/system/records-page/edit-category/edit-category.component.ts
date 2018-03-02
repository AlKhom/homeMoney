import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ha-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  currentCategoryId = 1;
  @Input() categories;

  constructor() { }

  ngOnInit() {
  }
  onCategoryChange() {
    console.log(this.currentCategoryId);
  }
}
