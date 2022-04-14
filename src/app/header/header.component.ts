import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private authService: AuthenticationService,private router: Router) {}

  ngOnInit(): void {
    const token = this.authService.getBearerToken();
    this.authService.isUserAuthenticated(token).then(
      (authenticated: boolean) => {
        if (authenticated) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    );
  }

  navigateTo(route: string) {
    if (route === 'login') {
      localStorage.removeItem('auth_token');
    }
    this.router.navigate([route]);
  }
}
