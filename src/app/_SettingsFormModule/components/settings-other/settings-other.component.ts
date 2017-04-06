import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-other',
  templateUrl: './settings-other.component.html',
  styleUrls: ['./settings-other.component.css']
})
export class SettingsOtherComponent {
  @Input()
  parent: FormGroup;

}
