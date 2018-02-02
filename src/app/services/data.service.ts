import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';


import { AppError } from './../common/app.error';
import { NotFoundError } from './../common/not-found.error';
import { BadInput } from './../common/bad-input';

@Injectable()
export class DataService {

  constructor(private url: string ,private http: Http) { }

  getAll() {
    return this.http.get(this.url)
               .map(response => response.json())
               .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
                    .map(response => response.json())
                    .catch(this.handleError);
  }

  edit(object, resource) {
    return this.http.patch(this.url + '/' + object.id, resource)
               .map(response => response.json())
               .catch(this.handleError);
  }

  delete(object){  // use id directly
    // promises not advisable, Observable => lazy(won't execute until subscribe), promises => eager(will execute)
    // all the operators which are powerful are Observable's
    /*
      we can convert Observable to promises
      Observable's are powerful
      prefer Observable's
      Observable's allow reactive programming
      Observable's provide powerful operators
      Observable's are lazy
    */
    // success
    return this.http.delete(this.url + '/' + object.id)
                    .map(response => response.json())
                    //.toPromise()
                    .catch(this.handleError);

    // fail
    // return Observable.throw(new AppError());
  }



  private handleError(error: Response) {
    if(error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if(error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error.json()));
  }

}
