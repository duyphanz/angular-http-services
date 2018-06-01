import { InputError } from './../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import 'rxjs/add/observable/throw'

@Injectable()
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url)
  }
  
  createPost(post) {
    
    return this.http.post(this.url, JSON.stringify(post))
    .catch((error: Response) => {
      if(error.status === 400)
        return Observable.throw(new InputError())
      return Observable.throw(new AppError())
    })
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id)
    .catch((error: Response) => {
      if(error.status === 404) 
        return Observable.throw(new NotFoundError())
      return Observable.throw(new AppError(error))
    })
  }

}
