import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showItem: boolean = false;
  constructor(private router: Router, private userService: UserServiceService) { }
  user: any;
  ngOnInit(): void {
    this.userService.getHeader().subscribe((data: any) => {
      this.showItem = data;
    })
    this.userService.getUser().subscribe((data: any) => {
      this.user = data;
    })
  }

  navigateTo(route: string) {
    if (route === 'login') {
      localStorage.removeItem('auth_token');
      this.userService.getHeader().next(false);
    }
    console.log(this.user);
    this.router.navigate([route, { user: JSON.stringify(this.user) }]);
  }

}
