import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { AppError } from './../common/app.error';
import { NotFoundError } from './../common/not-found.error';
import { BadInput } from './../common/bad-input';

@Injectable()
export class DataService {

  constructor(private url: string ,private http: Http) { }

  getAll() {
    return this.http.get(this.url)
               .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
                    .catch(this.handleError);
  }

  edit(object, resource) {
    return this.http.patch(this.url + '/' + object.id, resource)
               .catch(this.handleError);
  }

  delete(object){  // use id directly
    return this.http.delete(this.url + '/' + object.id)
                    .catch(this.handleError);
  }



  private handleError(error: Response) {
    if(error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if(error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error.json()));
  }

}
