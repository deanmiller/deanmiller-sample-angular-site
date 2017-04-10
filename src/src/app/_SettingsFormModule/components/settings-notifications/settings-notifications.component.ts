import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-notifications',
  templateUrl: './settings-notifications.component.html',
  styleUrls: ['./settings-notifications.component.css']
})
export class SettingsNotificationsComponent {
  @Input()
  parent: FormGroup;

}
