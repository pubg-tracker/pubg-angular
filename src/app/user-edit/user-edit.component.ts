import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userModel = new User("", "", "");
  constructor() { }
  pass = this.userModel.password;

  passwordmatch: any | undefined

  public condcheck: boolean = true;
  ngOnInit(): void {
  }

  onClick(pass: string) {
    this.pass = pass
  }
}
