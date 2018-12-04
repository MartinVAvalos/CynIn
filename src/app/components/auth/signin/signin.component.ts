import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { UserService } from '../../../services/user.service';
import { FireserveService } from '../../../services/fireserve.service';

import{ User } from '../../../models/user.model';

import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  user: User;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userFire: UserService,
    private fire: FireserveService) {

      this.user = {

        nameFirst: '',
        nameLast: '',
        email: '',

        isAdmin: false,

        timein: null,
        timeout: null,
        totalTimeMin: 0     //keeps track of total time
      };
    }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);

    // this.onFetch();
    console.log("Stuffs " );


    var time = new Date();
    this.userFire.onSaveIn(email, time);
    // console.log("Time is "+time.getHours() + ":" + time.getMinutes());

    // this.router.navigate(['/home']);
  }

  consoleL() {
    this.onFetch(); //
  }


  onFetch(){
    this.fire.getUser()
    .subscribe(
      (servers: User) =>console.log("Checks " + servers),
      (error)=> console.log(error)
    );
  }
}
//this.user=servers
