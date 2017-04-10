import { AngularFire, FirebaseObjectObservable } from 'angularfire2/index';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class FirebasecallService {

WebAppAccounts : string[];

  constructor(private af: AngularFire) {}

  getSettings(): Observable<any>{
    return this.af.database.object('WebAppAccounts')
              .map(res => res.json());
  }


}
