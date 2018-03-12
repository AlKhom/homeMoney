import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../../shared/services/category.service';
import {CategoryModel} from '../../shared/models/category.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'ha-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit, OnDestroy {


  @Output() categoryAdd = new EventEmitter();
  sub1: Subscription;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {name, capacity} = form.value;
    const category = new CategoryModel(name, capacity);

    this.categoryService.addCategory(category).subscribe(
      (data) => {
        form.reset();
        form.form.patchValue({capacity: 1});
        this.categoryAdd.emit(data);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }

  }

}
