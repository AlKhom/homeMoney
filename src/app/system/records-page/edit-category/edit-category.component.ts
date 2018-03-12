import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CategoryModel} from '../../shared/models/category.model';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../../shared/services/category.service';
import {Message} from '../../../shared/models/message.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'ha-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit, OnDestroy {


  currentCategoryId = 1;
  @Input() categories;
  @Output() categoryEdited = new EventEmitter();
  message: Message;
  sub1: Subscription;

  currentCategory: CategoryModel;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.onCategoryChange();
    this.message = new Message('success', '');
  }

  onCategoryChange() {
    this.currentCategory = this.categories.find(
      c => c.id === +this.currentCategoryId
    );
  }

  onSubmit(form: NgForm) {
    const {name, capacity} = form.value;
    const category = new CategoryModel(name, capacity, this.currentCategoryId);
    this.sub1 = this.categoryService.editCategory(category).subscribe(
      (data) => {
        console.log(data);
        this.categoryEdited.emit(data);
        this.message.text = 'Category was edited';
        window.setTimeout(() => this.message.text = '', 3000);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
