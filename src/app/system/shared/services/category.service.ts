import {Injectable} from '@angular/core';
import {BaseApi} from '../../../shared/core/base-api';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../models/category.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addCategory(category: CategoryModel): Observable<any> {
    console.log(category);
    return this.post('categories', category);
  }

  getCategory(): Observable<any> {
    return this.get('categories');
  }
}
