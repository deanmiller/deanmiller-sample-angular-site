import { AuthInfo } from './../shared/security/auth-info';
import { AuthService } from './../shared/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SvgImagePowershellComponent } from '../SVG/svg-image-powershell/svg-image-powershell.component';
import { SvgImageCogwheelComponent } from '../SVG/svg-image-cogwheel/svg-image-cogwheel.component';
import { SvgImageDashboardComponent } from '../SVG/svg-image-dashboard/svg-image-dashboard.component';
import { SvgImageLogoutComponent } from '../SVG/svg-image-logout/svg-image-logout.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  authInfo: AuthInfo

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {

     this.authService.authInfo$.subscribe(authInfo => this.authInfo = authInfo);

  }


logout(){

   this.router.navigate(['/home'])
   this.authService.logout()
}

}
