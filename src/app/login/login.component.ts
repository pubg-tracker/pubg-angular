
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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
  invalidInput: boolean = false;
  @ViewChild('userForm', { static: false, read: NgForm }) loginForm: any;

  constructor(private authService: AuthenticationService, private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser() {
    // console.log(this.loginForm);
    if (this.loginForm.form.controls['password'].invalid || this.loginForm.form.controls['password'].invalid) {
      this.loginForm.form.controls['email'].touched = true;
      this.loginForm.form.controls['password'].touched = true;
    } else {
      this.userService.loginUser(this.userLogin).subscribe(
        (data: any) => {
          this.authService.setBearerToken(data.token);
          // console.log(data);
          // console.log('result', data.token);
          if (data) {
            this.userService.getUser().next(data.user);
            this.router.navigate(['login-success', { message: 'Login is Successfull' }])
          }
          else {
            this.invalidInput = true;
          }
        }
      );
    }
  }

}
