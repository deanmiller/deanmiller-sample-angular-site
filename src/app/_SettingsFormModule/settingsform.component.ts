import { AngularFire, FirebaseObjectObservable, } from 'angularfire2/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirebasecallService } from './firebase.service';
import { WebAppAccounts, Data, UserAccounts } from './models.interface';
  import { SettingsServersComponent } from './components/settings-servers/settings-servers.component';
  import { SettingsLifecycleManagementComponent } from './components/settings-lifecycle-management/settings-lifecycle-management.component';
  import { SettingsReportsComponent } from './components/settings-reports/settings-reports.component';
  import { SettingsOtherComponent } from './components/settings-other/settings-other.component';
  import { SettingsNotificationsComponent } from './components/settings-notifications/settings-notifications.component';
  import { SettingsWorkstationsComponent } from './components/settings-workstations/settings-workstations.component'

@Component({
  selector: 'settings-form',
  templateUrl: './settingsform.component.html',
  styleUrls: ['./settingsform.component.css']
})
export class SettingsFormComponent implements OnInit {

debug: boolean = false;
form: FormGroup;

// Data: Data;
// WebAppAccounts: WebAppAccounts;
// UserAccounts: UserAccounts ;

constructor(private _FireBase: FirebasecallService, private fb: FormBuilder, private af: AngularFire){

this.form = this.fb.group({
  notifications: this.fb.group({
    Notify: ['',[Validators.required,Validators.email]]
  }),
  workstations: this.fb.group({
    Inventory: '',
    Clean: '',
    RemoveOldRoamingProfiles: '',
    DaysOld: '',
    PruneOldFiles: '',
    PruneFilesOlderThan: '',
    BlockUnwantedPrograms: ''
  }),
  servers: this.fb.group({
    MonitorServers: '',
    Servers: '',
    MonitorDiskSpace: '',
    DefragServers: ''
  }),
  lifecyclemanagement: this.fb.group({
    RemoveOldComputers: '',
    RemoveOldComputersdays: '',
    RemoveOldUsers: '',
    RemoveOldUsersdays: ''
  }),
  other: this.fb.group({
    MonitorInternetConnectoion: ''
  }),
  reports: this.fb.group({
    Prune: '',
    OldUsers: '',
    ServerUptime: ''
  })
});



}




onSubmit(){
  console.log('Submit:', this.form.value);
}


  ngOnInit(){ 

    const settings$ : FirebaseObjectObservable<any> = this.af.database.object('WebAppAccounts');
    settings$
      .subscribe(  
                res => {
                    this.form.setValue({
                      
                          notifications: {
                            Notify: res.UserAccounts.Email
                          },
                          servers: {
                            MonitorServers: res.Data.WebAppSettings.Servers.MonitorServers,
                            Servers: res.Data.DomainInformation.Servers,
                            MonitorDiskSpace: res.Data.WebAppSettings.Servers.MonitorDiskSpace,
                            DefragServers: res.Data.WebAppSettings.Servers.DefragServers
                          },
                          workstations:{
                                Inventory: res.Data.WebAppSettings.Workstations.Inventory,
                                Clean: res.Data.WebAppSettings.Workstations.Clean,
                                RemoveOldRoamingProfiles: res.Data.WebAppSettings.Workstations.RemoveOldRoamingProfiles,
                                DaysOld: res.Data.WebAppSettings.Workstations.RemoveProfilesOlderThan,
                                PruneOldFiles: res.Data.WebAppSettings.Workstations.PruneOldFiles,
                                PruneFilesOlderThan: res.Data.WebAppSettings.Workstations.PruneFilesOlderThan,
                                BlockUnwantedPrograms: res.Data.WebAppSettings.Workstations.BlockUnwantedPrograms
                          },
                          lifecyclemanagement: {
                            RemoveOldComputers: res.Data.WebAppSettings.LifecycleManagement.RemoveOldComputers,
                            RemoveOldComputersdays: res.Data.WebAppSettings.LifecycleManagement.RemoveOldComputersdays,
                            RemoveOldUsers: res.Data.WebAppSettings.LifecycleManagement.RemoveOldUsers,
                            RemoveOldUsersdays: res.Data.WebAppSettings.LifecycleManagement.RemoveOldUsersdays,
                          },
                          other: { MonitorInternetConnectoion: res.Data.WebAppSettings.Other.MonitorInternetConnectoion},
                          reports:{
                                Prune: res.Data.WebAppSettings.Reports.Prune,
                                OldUsers: res.Data.WebAppSettings.Reports.OldUsers,
                                ServerUptime: res.Data.WebAppSettings.Reports.ServerUptime
                          }

                  });

              }//res => ...

            );//subscribe
        
  }


}

