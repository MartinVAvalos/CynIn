// Purpose: Manages signin

import { Component, Input } from '@angular/core';
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
  @Input() userE: Event;

  user: User;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userFire: UserService,
    private fire: FireserveService,
    private userServices: UserService) {

      this.user = userServices.model();
    }

  onSignin(form: NgForm) {
    this.authService.value = null;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);

    // this.fire.getUser().subscribe(
    //   (server: User) => {
    //     this.user = server;
    //     this.save();
    //   }
    // );

    // var time = new Date();
   // this.userFire.onSaveIn(email, time);
    // console.log("Time is "+time.getHours() + ":" + time.getMinutes());

    // this.router.navigate(['/home']);



    this.router.navigate(['/member']);

  }

  consoleL() {
    // this.onFetch(); //
  }


  save() {
    this.fire.storeUser(this.user).subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
    );
  }

  // onFetch(){
  //   this.fire.getUser()
  //   .subscribe(
  //     (servers: User) =>console.log("Checks " + servers),
  //     (error)=> console.log(error)
  //   );
  // }
}
//this.user=servers
