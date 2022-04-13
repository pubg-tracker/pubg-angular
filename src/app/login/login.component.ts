
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginuser } from '../models/loginuser';
import { AuthenticationService } from '../services/authentication.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = new Loginuser("", "");

  constructor(private authService: AuthenticationService, private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser() {
    this.userService.loginUser(this.userLogin).subscribe(
      (data: { token: string }) => {
        this.authService.setBearerToken(data.token);
        this.router.navigate(['login-success', { message: 'Login is Successfull' }])
      }
    );
  }

}
