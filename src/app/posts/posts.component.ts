import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';

import { AppError } from './../common/app.error';
import { NotFoundError } from './../common/not-found.error';
import { BadInput } from './../common/bad-input';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts:any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe(
      response => {
      this.posts = response.json();
      },
      error => {
        console.log('An Unexpected Error Occurred.');
        console.log('error');
      }
    );
  }

  createPost(input: HTMLInputElement) {
    //let post: any = {title: input.value };
    let post = {title: input.value };
    input.value = '';
    this.service.createPost(JSON.stringify(post))
      .subscribe(
        response => {
          // post.id = response.json().id;
          post['id'] = response.json().id;
          // to push at the top of the list
          this.posts.splice(0, 0, post)
        },
        (error: AppError) => {
          if(error instanceof BadInput){
            //this.form.setErrors(error.json())
            //this.form.setErrors(error.originalError)
            console.log('bad Input');
          }
          else
            console.log('An Unexpected Error Occurred.');
          console.log('error');
        }
      );
  }

  updatePost(post) {
    this.service.editPost(post, JSON.stringify({isRead: true}))
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log('An Unexpected Error Occurred.');
            console.log('error');
          }
        );
    //this.http.patch(this.url, JSON.stringify(post));
  }

  detelePost(post) {
    this.service.deletePost(post)
        .subscribe(
          response => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1)
          },
          (error: AppError) => {
            if(error instanceof NotFoundError)
                console.log('Post Already Deleted');
            else
              console.log('An Unexpected Error Occurred.');
            console.log(error);
          }
        );
  }

}
