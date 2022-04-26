import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userModel = new User("", "", "", "", "");

  @ViewChild('userForm', { static: false, read: NgForm }) signupForm: any;
  constructor(private userService: UserServiceService, private router: Router, private authService: AuthenticationService,) { }
  localConfirmPassword: string = '';
  pass = this.userModel.password;
  cpass = this.localConfirmPassword;

  passwordmatch: any | undefined

  public condcheck: boolean = true;
  ngOnInit(): void {
  }

  onClick(pass: string, cpass: string) {
    this.pass = pass
    this.cpass = cpass
    this.signupForm.form.controls['username'].touched = true;
    this.signupForm.form.controls['password'].touched = true;
    this.signupForm.form.controls['email'].touched = true;
    this.signupForm.form.controls['confirmPassword'].touched = true;
    console.log(this.signupForm)
    // if (pass === cpass) {
    //   this.passwordmatch = ""
    //   this.userService.createUser(this.userModel).subscribe((data: any) => {
    //     // this.authService.setBearerToken(data.token);
    //     // console.log(data);
    //     this.userService.getUser().next(data);
    //     this.router.navigate(['login-success', { message: 'Signup is Successfull' }])
    //   });
    // }
    // else {
    //   this.passwordmatch = "password doesn't match"
    // }
  }

}

