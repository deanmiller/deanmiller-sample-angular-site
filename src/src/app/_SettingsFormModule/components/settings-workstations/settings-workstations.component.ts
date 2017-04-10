import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-workstations',
  templateUrl: './settings-workstations.component.html',
  styleUrls: ['./settings-workstations.component.css']
})
export class SettingsWorkstationsComponent {
  @Input()
  parent: FormGroup;

}
