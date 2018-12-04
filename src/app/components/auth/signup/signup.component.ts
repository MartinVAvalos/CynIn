import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import{ User } from '../../../models/user.model';
import { AuthService } from '../auth.service';
import { UserService } from '../../../services/user.service';

import { FireserveService } from '../../../services/fireserve.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]
})
export class SignupComponent {
  user: User;
  constructor(private authService: AuthService, private router: Router, private userFire: UserService, private fire: FireserveService) {
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

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;   // NOTE: password is equal to password1.
    this.authService.signupUser(email, password);

    this.authService.signinUser(email, password);  // Notifies firebase what uid to use in order to save
                                                   // name onto database (lines 48-55)


    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    // this.userFire.onSaveUp(email, firstName, lastName);

    this.user.email = form.value.email;
    this.user.nameFirst = form.value.firstName;
    this.user.nameLast = form.value.lastName;
    this.fire.storeUser(this.user)
    .subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
    );

    // this.authService.log_out();

    this.router.navigate(['/signin']);
  }

}
