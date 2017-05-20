import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Post } from './post';


@Injectable()
export class PostService {

  private postsUrl = 'http://devel2.ordermate.online/wp-json/wp/v2/posts';  // URL to web api

  constructor(
    private http: Http
  ) { }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl + '?_embed')
               .toPromise()
               .then(response => response.json() as Post[])
               .catch(this.handleError);
  }

  getPost(id: number): Promise<Post> {
    const url = `${this.postsUrl}/${id}`+'?_embed';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Post)
      .catch(this.handleError);
  }

  private handleError(error: any): void {
    //console.error('An error occurred', error); // for demo purposes only
    window.location.replace("/error");

    //return Promise.reject(error.message || error);
  } 

}
