import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

  authenticateUser(data: any) {
    return this.http.post('login', data).pipe(
      tap((response: any) => {
        this.setBearerToken(response.token);
      }));
  }

  setBearerToken(token: any) {
    const userToken = 'Bearer ' + token;
    localStorage.setItem('auth_token', userToken);
    return userToken;
  }

  getBearerToken() {
    const token = localStorage.getItem('auth_token');
    return token;
  }

  isUserAuthenticated(token: any): Promise<boolean> {
    const promise = new Promise<boolean>(
      (resolve, reject) => {
        this.http.post('http://localhost:5000/auth/v1/isAuthenticated', {}, {
          headers: { 'Authorization': token }
        }).subscribe((data: any) => {
          // console.log(data.isAuthenticated);
          if (data.isAuthenticated) {
            resolve(true);
          } else {
            resolve(false);
          }

        });

      }
    );
    return promise;
  }
}
