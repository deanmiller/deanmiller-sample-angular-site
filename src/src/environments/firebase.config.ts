import {AuthMethods,AuthProviders} from "angularfire2/index";

export const firebaseConfig = {
    apiKey: "AIzaSyCfnw26Gpv-21F1n5g00vv87vAumEtiC6A",
    authDomain: "deanmiller-sample-angular-site.firebaseapp.com",
    databaseURL: "https://deanmiller-sample-angular-site.firebaseio.com/",
    storageBucket: "deanmiller-sample-angular-site.appspot.com",
    messagingSenderId: "57339730272"
};



export const authConfig = {
     provider: AuthProviders.Password,
     method: AuthMethods.Password
}