import { Component } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent{
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
        .subscribe((response => {
          this.posts = response.json();
        }));
  }

  createPost(input: HTMLInputElement) {
    //let post: any = {title: input.value };
    let post = {title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
        .subscribe((response) => {
          // post.id = response.json().id;
          post['id'] = response.json().id;
          // to push at the top of the list
          this.posts.splice(0, 0, post)
        });
  }

}
