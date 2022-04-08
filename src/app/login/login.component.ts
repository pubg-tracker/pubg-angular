
import { Component, OnInit } from '@angular/core';
import { Loginuser } from '../models/loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = new Loginuser("", "");

  constructor() { }

  ngOnInit(): void {
  }

}
