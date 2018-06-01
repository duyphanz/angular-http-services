import { InputError } from './../common/bad-input';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import 'rxjs/add/observable/throw'


export class DataService {


  constructor(private url: string, private http: Http ) { }

  getData() {
    return this.http.get(this.url)
  }
  
  create(post) {
    
    return this.http.post(this.url, JSON.stringify(post))
    .catch(this.handlerError)
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .catch(this.handlerError)
  }

  private handlerError(error: Response) {
    if(error.status === 400)
        return Observable.throw(new InputError())
    if(error.status === 404) 
        return Observable.throw(new NotFoundError())
      return Observable.throw(new AppError(error))

  }
}