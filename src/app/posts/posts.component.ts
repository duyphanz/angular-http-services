import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: any[]

  constructor(private service: PostService) { 
   
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json()
      //console.log(response.json())
    })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value}

    this.service.createPost(post)
    .subscribe(
      response => {
      post['id'] = response.json().id;
      this.posts.unshift(post)
      console.log(response.json())
      
      },
      (error: Response) => {
        if(error.status === 404) alert('Bad request')
        else alert('An unexpected error occurred')
      })
  }

  deletePost(post) {
    this.service.deletePost(post)
    .subscribe(
      response => {
      let index = this.posts.indexOf(post);
      console.log(index)
      this.posts.splice(index, 1);
      console.log(response.json())
    },
      (error: AppError) => {
        if(error instanceof NotFoundError) {
          alert('This post has already been deleted')
        }
        else alert('An unexpected error occurred')
      })
  }
  

}
