import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
//
// import { AppError } from './../common/app.error';
// import { NotFoundError } from './../common/not-found.error';
// import { BadInput } from './../common/bad-input';

@Injectable()
export class PostService extends DataService {

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }

  // getPosts() {
  //   return this.http.get(this.url)
  //              .catch(this.handleError);
  // }
  //
  // createPost(body) {
  //   return this.http.post(this.url, body)
  //                   .catch(this.handleError);
  // }
  //
  // editPost(post, body) {
  //   return this.http.patch(this.url + '/' + post.id, body)
  //              .catch(this.handleError);
  // }
  //
  // deletePost(post){
  //   return this.http.delete(this.url + '/' + post.id)
  //                   .catch(this.handleError);
  // }
  //
  //
  //
  // private handleError(error: Response) {
  //   if(error.status === 400)
  //     return Observable.throw(new BadInput(error.json()));
  //
  //   if(error.status === 404)
  //     return Observable.throw(new NotFoundError());
  //
  //   return Observable.throw(new AppError(error.json()));
  // }

}
