import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
// import { RouterService } from './services/router.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService, private router: Router
    // private routerService: RouterService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.authService.getBearerToken();
    // return this.authService.isUserAuthenticated(token)
    //   .then(
    //     (authenticated: boolean) => {
    //       if (authenticated) {
    //         // this.routerService.routeToDashboard();
    //         return true;
    //       } else {
    //         // this.routerService.routeToLogin();
    //         this.router.navigate(['login']);
    //         return false;
    //       }
    //     }
    //   );
    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
