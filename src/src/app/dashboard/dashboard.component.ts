import { AngularFire, FirebaseObjectObservable } from 'angularfire2/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

WebAppAccounts; 

    constructor(private af: AngularFire) {}


  ngOnInit() {
    const settings$ : FirebaseObjectObservable<any> = this.af.database.object('WebAppAccounts');
    settings$
      .subscribe( 
                res => this.WebAppAccounts = res     
            );

   }

}




