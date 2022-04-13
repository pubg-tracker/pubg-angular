import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Loginuser } from '../models/loginuser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public userSubject = new BehaviorSubject<any>(null);

  url: string = 'http://localhost:8080/validate';
  springUrl: string = 'http://localhost:8080/createUser'
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.springUrl, user);
  }

  loginUser(user: any): any {
    return this.http.post(this.url, user);
  }

  getUser() {
    return this.userSubject;
  }

}
