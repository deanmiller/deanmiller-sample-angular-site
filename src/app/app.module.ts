//import { CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/Router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { firebaseConfig, authConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { SettingsFormModule } from './_SettingsFormModule/settingsform.module';

import { FirebasecallService } from './firebase.service';


import { AppComponent } from './app.component';
   import { HomeComponent } from './home/home.component';

   import { TopMenuComponent } from './top-menu/top-menu.component';
   import { LoginComponent } from './login/login.component';
   import { RegisterComponent } from './register/register.component';

   import { DashboardComponent } from './dashboard/dashboard.component';
   import { SettingsComponent } from './settings/settings.component';

   import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
   import { AboutComponent } from './about/about.component';
   import { ContactComponent } from './contact/contact.component';

   import { AuthService } from './shared/security/auth.service';
   import { AuthGuard } from './shared/security/auth.guard';

   import { SvgImagePowershellComponent } from './SVG/svg-image-powershell/svg-image-powershell.component';
   import { SvgImageCogwheelComponent } from './SVG/svg-image-cogwheel/svg-image-cogwheel.component';
   import { SvgImageDashboardComponent } from './SVG/svg-image-dashboard/svg-image-dashboard.component';
   import { SvgImageLogoutComponent } from './SVG/svg-image-logout/svg-image-logout.component';



const ROUTE_ROOT = [
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},

      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },

      { path: '', redirectTo: '/home', pathMatch: 'full'}, //Default Route
      { path: '**', redirectTo: '/home', pathMatch: 'full'} //Catch All Route
    ]

@NgModule({
  declarations: [
    AppComponent,
       TopMenuComponent,
       HomeComponent,
       LoginComponent,
       RegisterComponent,
       AboutComponent,
       ContactComponent,
       BottomMenuComponent,
     //Logged-in Components
       DashboardComponent,
       SettingsComponent,

       SvgImageDashboardComponent,
       SvgImagePowershellComponent,
       SvgImageCogwheelComponent,
       SvgImageLogoutComponent,
  ],
  imports: [
    //Built in Modules
      BrowserModule,
      ReactiveFormsModule,
      HttpModule,
      FormsModule,
      RouterModule.forRoot(ROUTE_ROOT),
      BrowserAnimationsModule,
    //3rd Party & Addon Modules
      FlexLayoutModule,                                  //https://github.com/angular/flex-layout
      MaterialModule.forRoot(),                          //https://material.angular.io/ & https://github.com/angular/material2
      AngularFireModule.initializeApp(firebaseConfig, authConfig),
    //My Custom Feature Modules
      SettingsFormModule,

  ],
  providers: [FirebasecallService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
