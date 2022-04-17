import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Loginuser } from '../models/loginuser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public userSubject = new BehaviorSubject<any>(null);
  public showItem = new BehaviorSubject<boolean>(false);

  url: string = 'http://localhost:8080/validate';
  springUrl: string = 'http://localhost:8080/createUser'
  editUrl: string = 'http://localhost:8080/updateUser';
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

  getHeader() {
    return this.showItem;
  }

  updateUser(user: any, file: File) {
    const formData: FormData = new FormData();
    console.log('user = ', user);
    console.log(file);
    formData.append('userId', user.userId);
    formData.append('userName', user.userName);
    formData.append('emailAddress', user.emailAddress);
    formData.append('password', user.password);
    formData.append('data', file);
    return this.http.put(this.editUrl, formData);
  }

}
