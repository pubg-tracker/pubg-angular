import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  // providers: [DomSanitizer],
})
export class UserEditComponent implements OnInit {
  userModel: any = new User("", "", "", "", "");
  constructor(private userService: UserServiceService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }
  // pass = this.userModel.password;
  file: any;
  passwordmatch: any | undefined
  // @Input() userId: string = '1';
  public condcheck: boolean = true;
  filename = '';
  imageSrc: any = '../../assets/user_profile.svg';

  ngOnInit(): void {
    // this.userModel.userId = this.userId;
    // console.log(this.route.snapshot.paramMap.get('user'));
    this.userModel = this.route.snapshot.paramMap.get('user');
    this.userModel = JSON.parse(this.userModel);
    // console.log(this.userModel.userId);
    this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.userModel.data);
  }
  base64String: any;
  // reader = new FileReader();
  onClick(pass: string) {
    // this.pass = pass
    this.userService.updateUser(this.userModel, this.file[0]).subscribe((result: any) => {
      // console.log(result);

      this.userModel.userId = result.userId;
      this.userModel.emailAddress = result.emailAddress;
      this.userModel.userName = result.userName;
      this.userModel.password = result.password;
      this.base64String = result.data;
      // console.log(result.data);
      // let blob = new Blob([result.data], { type: 'image/png' })
      // console.log('blob ', blob)
      // var reader = new FileReader();
      // reader.readAsDataURL(blob);
      // reader.onloadend = (e) => {
      //   console.log(reader.result);
      //   this.base64String = reader.result as string;
      //   this.imageSrc = this.base64String;
      this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.base64String);
      // };
      // reader.readAsDataURL(blob);
      // reader.onloadend = function () {
      //   var base64String = reader.result;
      //   console.log('Base64 String - ', base64String);
      // }
      // let objectURL = URL.createObjectURL(result.data);
    });
  }




  onFileInput(event: any): void {
    console.log(event.path[0].files[0])
    this.filename = event.path[0].files[0].name;
    this.file = event.path[0].files;
  }
}
