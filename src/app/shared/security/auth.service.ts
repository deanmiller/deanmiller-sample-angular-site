import { AuthInfo } from './auth-info';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { FirebaseAuthState, AngularFire } from 'angularfire2/index'; //FirebaseAuth,

@Injectable()
export class AuthService {

  static UNKNOWN_USER = new AuthInfo(null);

  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

  constructor(private af: AngularFire) {

  af.auth.subscribe(auth => {
    if(auth) {
      console.log('logged in');
    } else {
      console.log('not logged in');
    }
  });

}



  login(email, password): Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(this.af.auth.login({ email, password }));
  }



  signUp(email, password): Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(this.af.auth.createUser({ email, password }));
  }

  fromFirebaseAuthPromise(promise): Observable<any> {

    const subject = new Subject<any>();

    promise
      .then(res => {
        const authInfo = new AuthInfo(this.af.auth.getAuth().uid);
        this.authInfo$.next(authInfo);
        subject.next(res);
        subject.complete();
      },
      err => {
        this.authInfo$.error(err);
        subject.error(err);
        subject.complete();
      });

    return subject.asObservable();

  }

logout(){
  this.af.auth.logout();
  this.authInfo$.next(AuthService.UNKNOWN_USER);
}


}