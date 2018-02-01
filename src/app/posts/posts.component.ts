import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';


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
        alert('An Unexpected Error Occurred.');
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
        (error: Response) => {
          if(error.status === 400){
            //this.form.setErrors(error.json())
          }
          else
            alert('An Unexpected Error Occurred.');
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
            alert('An Unexpected Error Occurred.');
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
          (error: Response) => {
            if(error.status === 404)
                alert('Post Already Deleted');
            else
              alert('An Unexpected Error Occurred.');
            console.log('error');
          }
        );
  }

}
