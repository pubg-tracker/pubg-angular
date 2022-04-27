import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const endpoint = 'https://jsonplaceholder.typicode.com/posts';
const endpoint = 'https://randomuser.me/api/?results=100';


@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(endpoint);
  }

}