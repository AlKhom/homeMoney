import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../shared/services/category.service';
import {CategoryModel} from '../shared/models/category.model';

@Component({
  selector: 'ha-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  categories: CategoryModel[] = [];
  isLoaded = false;

  ngOnInit() {
    this.categoryService.getCategory().subscribe(
      data => {
        this.categories = data;
        this.isLoaded = true;
      }
    );
  }

  newAddedCategory(event) {
    this.categories.push(event);
  }

  categoryWasEdited(category: CategoryModel) {
    const ind = this.categories.findIndex(
      c => c.id === c.id
    );
    this.categories[ind] = category;
  }
}
