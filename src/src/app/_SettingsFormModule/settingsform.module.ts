import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';


  import { SettingsFormComponent } from './settingsform.component';
  import { FirebasecallService } from './firebase.service';

    import { SettingsServersComponent } from './components/settings-servers/settings-servers.component';
    import { SettingsLifecycleManagementComponent } from './components/settings-lifecycle-management/settings-lifecycle-management.component';
    import { SettingsOtherComponent } from './components/settings-other/settings-other.component';
    import { SettingsReportsComponent } from './components/settings-reports/settings-reports.component';
    import { SettingsNotificationsComponent } from './components/settings-notifications/settings-notifications.component';
    import { SettingsWorkstationsComponent } from './components/settings-workstations/settings-workstations.component';



@NgModule({
  declarations: [
      SettingsFormComponent,
        SettingsServersComponent,
        SettingsLifecycleManagementComponent,
        SettingsOtherComponent,
        SettingsReportsComponent,
        SettingsNotificationsComponent,
        SettingsWorkstationsComponent
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpModule,
      MaterialModule
  ],
  providers: [FirebasecallService],
  exports: [
      SettingsFormComponent
      //FirebasecallService
  ],
})
export class SettingsFormModule { }
