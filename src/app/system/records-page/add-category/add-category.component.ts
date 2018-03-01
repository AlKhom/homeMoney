import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../../shared/services/category.service';
import {CategoryModel} from '../../shared/models/category.model';

@Component({
  selector: 'ha-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  @Output() categoryAdd = new EventEmitter();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {name, capacity} = form.value;
    const category = new CategoryModel(name, capacity);

    this.categoryService.addCategory(category).subscribe(
      data => this.categoryAdd.emit(data)
    );
  }

}
