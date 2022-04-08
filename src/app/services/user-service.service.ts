import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginuser } from '../models/loginuser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // url: string = 'http://localhost:3000/users';
  url: string = 'http://localhost:5000/auth/v1/';
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  loginUser(user: any): any {
    return this.http.post(this.url, user);
  }

}
