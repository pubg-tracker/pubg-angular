// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userModel =new User("","","","");
  constructor() { }

  pass=this.userModel.password;
  cpass=this.userModel.confirmPassword;

  passwordmatch:any | undefined

  public condcheck:boolean=true;
  ngOnInit(): void {
  }

  onClick(pass:string, cpass: string){
    this.pass=pass
    this.cpass=cpass
    if(pass === cpass){
      this.passwordmatch=""
    }
    else{
      this.passwordmatch="password doesn't match"
    }
  }

}

