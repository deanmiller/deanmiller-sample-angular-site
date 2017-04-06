import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-lifecyclemanagement',
  templateUrl: './settings-lifecycle-management.component.html',
  styleUrls: ['./settings-lifecycle-management.component.css']
})
export class SettingsLifecycleManagementComponent {

  @Input()
  parent: FormGroup;

}
