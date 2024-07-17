import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogUrl = 'http://localhost/solarblog';

  constructor(private http: HttpClient) { }

  getPosts() {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts`;
    console.log(url);
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  getSinglePost(id: any) {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts/${id}`;
    console.log(url);
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error);
    });
  }
}
