import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-servers',
  templateUrl: './settings-servers.component.html',
  styleUrls: ['./settings-servers.component.css']
})
export class SettingsServersComponent {
  @Input()
  parent: FormGroup;

}
