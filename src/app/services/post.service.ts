import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(body) {
    return this.http.post(this.url, body);
  }

  editPost(post, body) {
    return this.http.patch(this.url + '/' + post.id, body);
  }

  deletePost(post){
    return this.http.delete(this.url + '/' + post.id);
  }

}
