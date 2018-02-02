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
    this.service.getAll().subscribe(
      posts => {
      this.posts = posts;
      }
    );
  }

  createPost(input: HTMLInputElement) {
    //let post: any = {title: input.value };
    let post = {title: input.value };
    // to push at the top of the list
    this.posts.splice(0, 0, post)

    input.value = '';

    this.service.create(JSON.stringify(post))
      .subscribe(
        newpost => {
          // post.id = response.json().id;
          post['id'] = newpost.id;
        },
        (error: AppError) => {
          this.posts.splice(0,1);
          if(error instanceof BadInput){
            //this.form.setErrors(error.json())
            //this.form.setErrors(error.originalError)
            console.log('bad Input');
          }
          else
            throw error;
          console.log('error');
        }
      );
  }

  updatePost(post) {
    this.service.edit(post, JSON.stringify({isRead: true}))
        .subscribe(
          updatedPost => {
            console.log(updatedPost);
          }
        );
    //this.http.patch(this.url, JSON.stringify(post));
  }

  detelePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1)

    //this.service.delete(post).then().catch()
    this.service.delete(post)
        .subscribe(
          null,
          (error: AppError) => {
            this.posts.splice(index, 0, post);

            if(error instanceof NotFoundError)
                console.log('Post Already Deleted');
            else
              throw error;
            console.log(error);
          }
        );
  }

}

// export class PostsComponent implements OnInit {
//   posts:any[];
//
//   constructor(private service: PostService) {
//   }
//
//   ngOnInit() {
//     this.service.getPosts().subscribe(
//       response => {
//       this.posts = response.json();
//       }
//     );
//   }
//
//   createPost(input: HTMLInputElement) {
//     //let post: any = {title: input.value };
//     let post = {title: input.value };
//     input.value = '';
//     this.service.createPost(JSON.stringify(post))
//       .subscribe(
//         response => {
//           // post.id = response.json().id;
//           post['id'] = response.json().id;
//           // to push at the top of the list
//           this.posts.splice(0, 0, post)
//         },
//         (error: AppError) => {
//           if(error instanceof BadInput){
//             //this.form.setErrors(error.json())
//             //this.form.setErrors(error.originalError)
//             console.log('bad Input');
//           }
//           else
//             throw error;
//           console.log('error');
//         }
//       );
//   }
//
//   updatePost(post) {
//     this.service.editPost(post, JSON.stringify({isRead: true}))
//         .subscribe(
//           response => {
//             console.log(response);
//           }
//         );
//     //this.http.patch(this.url, JSON.stringify(post));
//   }
//
//   detelePost(post) {
//     this.service.deletePost(post)
//         .subscribe(
//           response => {
//             let index = this.posts.indexOf(post);
//             this.posts.splice(index, 1)
//           },
//           (error: AppError) => {
//             if(error instanceof NotFoundError)
//                 console.log('Post Already Deleted');
//             else
//               throw error;
//             console.log(error);
//           }
//         );
//   }
//
// }
