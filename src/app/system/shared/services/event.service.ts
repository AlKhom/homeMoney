import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HAEvent} from '../models/event.model';
import {Observable} from 'rxjs/Observable';

import {BaseApi} from '../../../shared/core/base-api';

@Injectable()
export class EventService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: HAEvent): Observable<any> {
    return this.post('events', event);
  }
}
