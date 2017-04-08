import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router){

}


 canActivate(route:ActivatedRouteSnapshot,
             state:RouterStateSnapshot):Observable<boolean> {

      return this.authService.authInfo$  //return added on 1/10/2017
          .map(authInfo => authInfo.isLoggedIn())
          .take(1)
          .do(allowed => {
              if(!allowed) {
                this.router.navigate(['/login']);
              }
          });        
      //return undefined;
 }

}