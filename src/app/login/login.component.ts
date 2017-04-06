import {AuthService} from './../shared/security/auth.service';
import {Component,OnInit} from '@angular/core';
import {Validators,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   form:FormGroup

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              /*private _r:Router*/) { 

    this.form = this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }


  login(){

    const formValue = this.form.value;

   this.authService.login(formValue.email, formValue.password)
        .subscribe(
            /*() => this._r.navigate(['/home']),*/
            console.log
        );
  }


}
