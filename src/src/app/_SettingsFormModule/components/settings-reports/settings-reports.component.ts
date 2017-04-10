import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-reports',
  templateUrl: './settings-reports.component.html',
  styleUrls: ['./settings-reports.component.css']
})
export class SettingsReportsComponent {
  @Input()
  parent: FormGroup;

}
